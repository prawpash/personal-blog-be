import Image from '@core/domain/entities/Image';
import ImageValidator from '@core/domain/validators/ImageValidator';

export default class ImageBuilder {
  private id: number | null;
  private fileName: string;
  private fileLocation: string;

  constructor() {
    this.id = null;
    this.fileName = '';
    this.fileLocation = '';
  }

  build() {
    ImageValidator.validate(this.id, this.fileName, this.fileLocation);

    return new Image(this.id, this.fileName, this.fileLocation);
  }

  setId(id: number) {
    this.id = id;
  }

  setFileName(fileName: string) {
    this.fileName = fileName;
  }

  setFileLocation(fileLocation: string) {
    this.fileLocation = fileLocation;
  }
}
