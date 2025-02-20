import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import * as argon from 'argon2';
import { AuthDto } from './dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signup(dto: AuthDto) {
    try {
      const hash = await argon.hash(dto.password);

      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          username: dto.username,
          phone_number: dto.phone_number,
          role: dto.role,
          password: hash,
        },
      });
      delete user.password;

      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }

  async signin(dto: AuthDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (!user) throw new ForbiddenException('Wrong credentials');
    const pwMatch = argon.verify(user.password, dto.password);
    if (!pwMatch) throw new ForbiddenException('Wrong credentials');

    return this.singinToken(user.id, user.email);
  }

  singinToken(userId: number, email: string): Promise<string> {
    const payload = { susb: userId, email };

    const secret = this.config.get('JWT_SECRET');
    return this.jwt.signAsync(payload, { secret });
  }
}
