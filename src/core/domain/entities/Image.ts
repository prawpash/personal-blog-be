export default class Image {
  private id: number | null;
  private fileName: string;
  private fileLocation: string;
  private createdAt: Date;
  private updatedAt: Date;

  constructor(id: number | null, fileName: string, fileLocation: string) {
    this.id = id;
    this.fileName = fileName;
    this.fileLocation = fileLocation;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  getId() {
    return this.id;
  }

  setId(id: number) {
    this.id = id;
  }

  getFileName() {
    return this.fileName;
  }

  setFileName(fileName: string) {
    this.fileName = fileName;
  }

  getFileLocation() {
    return this.fileLocation;
  }

  setFileLocation(fileLocation: string) {
    this.fileLocation = fileLocation;
  }

  getCreatedAt() {
    return this.createdAt;
  }

  setCreatedAt(createdAt: Date) {
    this.createdAt = createdAt;
  }

  getUpdatedAt() {
    return this.updatedAt;
  }

  setUpdatedAt(updatedAt: Date) {
    this.updatedAt = updatedAt;
  }
}
