import { PostStatus } from '@core/domain/enums/PostStatus';
import {
  ArrayNotEmpty,
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreatePostDTO {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  readonly slug: string;

  @IsNotEmpty()
  @IsNumber()
  readonly thumbnailId: number;

  @IsArray()
  @ArrayNotEmpty()
  @IsInt({ each: true })
  readonly categoryIds: number[];

  @IsArray()
  @IsInt({ each: true })
  readonly relatedImageIds: number[];

  @IsNotEmpty()
  @IsString()
  readonly content: string;

  @IsNotEmpty()
  @IsEnum(PostStatus)
  readonly status: PostStatus;

  @IsNotEmpty()
  @IsNumber()
  readonly ownerId: number;
}
