import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class UpdateUserDto {
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

  @IsBoolean()
  is_anonymous: boolean;

  @IsNotEmpty()
  role: string;

  @IsNotEmpty()
  updated_at: Date;
}
