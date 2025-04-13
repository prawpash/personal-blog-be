import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Logger } from '@core/application/services/Logger';
import { InjectionToken } from '@infra/config/injectionToken.config';
import { CreatePostDTO } from '@presentation/dtos/post/CreatePostDTO';
import { IdValidationDTO } from '@presentation/dtos/IdValidationDTO';
import { UpdatePostDTO } from '@presentation/dtos/post/UpdatePostDTO';

@Controller('posts')
export class PostController {
  constructor(
    @Inject(InjectionToken.LOGGER)
    private readonly logger: Logger,
  ) {}

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
