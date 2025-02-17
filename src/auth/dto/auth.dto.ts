import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsPhoneNumber()
  phone_number: string;

  @IsBoolean()
  is_anonymous: boolean;

  @IsNotEmpty()
  role: string;

  @IsNotEmpty()
  created_at: Date;
}
