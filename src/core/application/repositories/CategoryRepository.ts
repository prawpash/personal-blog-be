import Category from '@core/domain/entities/Category';

export interface CategoryRepository {
  findAll({
    pageNumber,
    pageSize,
  }: {
    pageSize: number;
    pageNumber: number;
  }): Promise<Category[]>;

  findById(id: number): Promise<Category | null>;

  create(category: Category): Promise<Category>;

  update(category: Category): Promise<Category>;

  deleteById(categoryId: number): Promise<void>;
}
