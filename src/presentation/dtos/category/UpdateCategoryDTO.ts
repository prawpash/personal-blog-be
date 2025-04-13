import { PartialType } from '@nestjs/swagger';
import { CreateCategoryDTO } from './CreateCategoryDTO';

export class UpdateCategoryDTO extends PartialType(CreateCategoryDTO) {}
