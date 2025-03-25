import Category from '@core/domain/entities/Category';
import CategoryValidator from '@core/domain/validators/CategoryValidator';

export default class CategoryBuilder {
  private id: number | null;
  private name: string;

  constructor() {
    this.name = '';
  }

  build() {
    CategoryValidator.validate(this.id, this.name);

    return new Category(this.id, this.name);
  }

  setId(id: number) {
    this.id = id;
  }

  setName(name: string) {
    this.name = name;
  }
}
