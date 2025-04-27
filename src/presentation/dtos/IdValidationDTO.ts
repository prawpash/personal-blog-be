import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsInt, IsNotEmpty } from 'class-validator';

export class IdValidationDTO {
  @ApiProperty({
    name: 'id',
    required: true,
    type: Number,
    example: 1,
  })
  @IsNotEmpty()
  @Transform(({ value }: { value: string }) => parseInt(value, 10))
  @IsInt()
  readonly id: number;
}
