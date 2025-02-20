import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @ApiOperation({ summary: 'User signup' })
  @ApiResponse({ status: 201, description: 'User successfully signed up.' })
  @ApiResponse({ status: 400, description: 'Bad Request. Validation errors.' })
  @ApiResponse({ status: 409, description: 'Conflict. User already exists.' })
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @Post('signin')
  @ApiOperation({ summary: 'User signin' })
  @ApiResponse({ status: 201, description: 'User successfully logged in.' })
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
