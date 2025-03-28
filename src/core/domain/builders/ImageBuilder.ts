import Image from '@core/domain/entities/Image';
import ImageValidator from '@core/domain/validators/ImageValidator';

export default class ImageBuilder {
  private id: number | null;
  private fileName: string;
  private fileLocation: string;
  private createdAt: Date;
  private updatedAt: Date;

  constructor() {
    this.id = null;
    this.fileName = '';
    this.fileLocation = '';
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  build() {
    ImageValidator.validate(this.id, this.fileName, this.fileLocation);

    return new Image(
      this.id,
      this.fileName,
      this.fileLocation,
      this.createdAt,
      this.updatedAt,
    );
  }

  setId(id: number) {
    this.id = id;
    return this;
  }

  setFileName(fileName: string) {
    this.fileName = fileName;
    return this;
  }

  setFileLocation(fileLocation: string) {
    this.fileLocation = fileLocation;
    return this;
  }

  setCreatedAt(createdAt: Date) {
    this.createdAt = createdAt;
    return this;
  }

  setUpdatedAt(updatedAt: Date) {
    this.updatedAt = updatedAt;
    return this;
  }
}
