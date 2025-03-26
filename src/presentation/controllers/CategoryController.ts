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
import { LoggerService } from '@infra/logging/LoggerService';
import { CreateCategoryDTO } from './dtos/category/CreateCategoryDTO';
import { UpdateCategoryDTO } from './dtos/category/UpdateCategoryDTO';

@Controller('categories')
export class CategoryController {
  constructor(private readonly logger: LoggerService) {
    this.logger.setContext(CategoryController.name);
  }

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
