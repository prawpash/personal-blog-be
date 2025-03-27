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
import { IdValidationDTO } from '@presentation/controllers/dtos/IdValidationDTO';
import { CreateCategoryDTO } from './dtos/category/CreateCategoryDTO';
import { UpdateCategoryDTO } from './dtos/category/UpdateCategoryDTO';
import { Logger } from '@core/application/services/Logger';
import { InjectionToken } from '@infra/config/injectionToken.config';

@Controller('categories')
export class CategoryController {
  constructor(
    @Inject(InjectionToken.LOGGER)
    private readonly logger: Logger,
  ) {}

  @Get()
  getCategories() {
    return 'Get categories';
  }

  @Get(':name')
  getCategoryByName(@Param('name') name: string) {
    return `Get category by slug: ${name}`;
  }

  @Post()
  createCategory(@Body() createCategoryDTO: CreateCategoryDTO) {
    this.logger.debug(createCategoryDTO);

    return 'Create category';
  }

  @Put(':id')
  updateCategory(
    @Param() params: IdValidationDTO,
    @Body() updatedCategoryDTO: UpdateCategoryDTO,
  ) {
    const { id } = params;

    this.logger.debug(updatedCategoryDTO);

    return `Update category by id: ${id}`;
  }

  @Delete(':id')
  deleteCategory(@Param() params: IdValidationDTO) {
    const { id } = params;

    return `Delete category by id: ${id}`;
  }
}
