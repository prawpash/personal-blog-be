import { PartialType } from '@nestjs/swagger';
import { CreatePostDTO } from './CreatePostDTO';

export class UpdatePostDTO extends PartialType(CreatePostDTO) {}
