export default class CategoryValidator {
  static validate(id: number | null, name: string) {
    if (id && typeof id !== 'number') {
      throw new Error('id must be a number');
    }

    if (!name || name.trim() === '') {
      throw new Error('name is required');
    }
  }
}
