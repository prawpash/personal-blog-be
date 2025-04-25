import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumberString } from 'class-validator';

export class IdValidationDTO {
  @ApiProperty({
    example: 1,
  })
  @IsNotEmpty()
  @IsNumberString()
  @Transform(({ value }: { value: string }) => parseInt(value, 10))
  readonly id: number;
}
