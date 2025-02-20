import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async findOne(userId: number) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    return user;
  }

  async update(userId: number, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.prisma.user.update({
      where: { id: userId },
      data: {
        email: updateUserDto.email,
        username: updateUserDto.username,
        phone_number: updateUserDto.phone_number,
        role: updateUserDto.role,
      },
    });
    return updatedUser;
  }

  async remove(userId: number) {
    const user = await this.prisma.user.delete({ where: { id: userId } });
    return user;
  }
}
