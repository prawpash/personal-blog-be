import { ApiProperty } from '@nestjs/swagger';
import IsNotEmptyString from '@presentation/decorators/IsNotEmptyString';
import { IsEmail, MaxLength, MinLength } from 'class-validator';

export class CreateUserRequestDTO {
  @ApiProperty({
    example: 'Sopo',
  })
  @IsNotEmptyString()
  @MaxLength(255)
  readonly name: string;

  @ApiProperty({
    example: 'sopo',
  })
  @IsNotEmptyString()
  @MaxLength(255)
  readonly username: string;

  @ApiProperty({
    example: 'sopo@example.com',
  })
  @IsNotEmptyString()
  @IsEmail()
  @MaxLength(255)
  readonly email: string;

  @ApiProperty({
    example: 'passwordeSopo',
  })
  @IsNotEmptyString()
  @MinLength(8, {
    message: 'Password must be at least 8 characters long',
  })
  @MaxLength(255)
  readonly password: string;
}
