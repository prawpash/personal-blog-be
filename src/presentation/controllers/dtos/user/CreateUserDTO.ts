import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly password: string;
}
