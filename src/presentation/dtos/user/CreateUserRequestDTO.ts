import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserRequestDTO {
  @ApiProperty({
    example: 'Sopo',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  readonly name: string;

  @ApiProperty({
    example: 'sopo',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  readonly username: string;

  @ApiProperty({
    example: 'sopo@example.com',
  })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @MaxLength(255)
  readonly email: string;

  @ApiProperty({
    example: 'passwordeSopo',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(8, {
    message: 'Password must be at least 8 characters long',
  })
  @MaxLength(255)
  readonly password: string;
}
