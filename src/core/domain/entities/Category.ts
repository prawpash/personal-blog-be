export default class Category {
  private id: number | null;
  private name: string;
  private createdAt: Date;
  private updatedAt: Date;

  constructor(id: number | null, name: string) {
    this.id = id;
    this.name = name;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  getId() {
    return this.id;
  }

  setId(id: number) {
    this.id = id;
  }

  getName() {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
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
