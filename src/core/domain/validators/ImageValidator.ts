export default class ImageValidator {
  static validate(id: number | null, fileName: string, fileLocation: string) {
    if (id && typeof id !== 'number') {
      throw new Error('id must be a number');
    }

    if (!fileName || fileName.trim() === '') {
      throw new Error('fileName is required');
    }

    if (!fileLocation || fileLocation.trim() === '') {
      throw new Error('fileLocation is required');
    }
  }
}
