import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { IdValidationDTO } from '@presentation/controllers/dtos/IdValidationDTO';
import { UpdatePostDTO } from './dtos/post/UpdatePostDTO';
import { CreatePostDTO } from './dtos/post/CreatePostDTO';
import { LoggerService } from '@infra/logging/LoggerService';

@Controller('posts')
export class PostController {
  constructor(private readonly logger: LoggerService) {
    this.logger.setContext(PostController.name);
  }

  @Get()
  getPosts() {
    return 'Get posts';
  }

  @Get(':slug')
  getPostBySlug(@Param('slug') slug: string) {
    return `Get post by slug: ${slug}`;
  }

  @Post()
  createPost(@Body() createPostDTO: CreatePostDTO) {
    this.logger.debug(createPostDTO);

    return 'Create post';
  }

  @Put(':id')
  updatePost(
    @Param() params: IdValidationDTO,
    @Body() updatedPostDTO: UpdatePostDTO,
  ) {
    const { id } = params;

    this.logger.debug(updatedPostDTO);

    return `Update post by slug: ${id}`;
  }

  @Delete(':id')
  deletePost(@Param() params: IdValidationDTO) {
    const { id } = params;

    return `Delete post by id: ${id}`;
  }
}
