import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateUserRequestDTO } from './CreateUserRequestDTO';

export class UpdateUserRequestDTO extends PartialType(
  OmitType(CreateUserRequestDTO, ['password'] as const),
) {}
