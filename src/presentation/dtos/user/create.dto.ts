import {
  IsString,
  IsEmail,
  IsBoolean,
  MinLength,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  readonly username: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  @MinLength(6)
  readonly password: string;

  @IsString()
  readonly fullName: string;

  @IsOptional()
  @IsBoolean()
  readonly isActive?: boolean;
}
