import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class AuthDto {
  @ApiProperty({ example: 'user@example.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'password123' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ example: 'username123' })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ example: '+1234567890' })
  @IsPhoneNumber()
  phone_number: string;

  // @ApiProperty({ example: false })
  @IsBoolean()
  is_anonymous: boolean;

  @IsNotEmpty()
  role: string;

  // @ApiProperty({ example: '2023-01-01T00:00:00Z' })
  @IsNotEmpty()
  created_at: Date;
}
