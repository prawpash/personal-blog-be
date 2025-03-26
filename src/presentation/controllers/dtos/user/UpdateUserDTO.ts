import { OmitType } from '@nestjs/swagger';
import { CreateUserDTO } from './CreateUserDTO';

export class UpdateUserDTO extends OmitType(CreateUserDTO, [
  'password',
] as const) {}
