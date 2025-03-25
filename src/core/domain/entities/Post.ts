export default class Post {
  private id: number | null;
  private title: string;
  private slug: string;
  private thumbnailId: number;
  private categoryIds: number[];
  private relatedImageIds: number[];
  private content: string;
  private status: string;
  private ownerId: number;
  private createdAt: Date;
  private updatedAt: Date;

  constructor(
    id: number | null,
    title: string,
    slug: string,
    thumbnailId: number,
    categoryIds: number[],
    relatedImageIds: number[],
    content: string,
    status: string,
    ownerId: number,
  ) {
    this.id = id;
    this.title = title;
    this.slug = slug;
    this.thumbnailId = thumbnailId;
    this.categoryIds = categoryIds;
    this.relatedImageIds = relatedImageIds;
    this.content = content;
    this.status = status;
    this.ownerId = ownerId;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  getId() {
    return this.id;
  }

  setId(id: number) {
    this.id = id;
  }

  getTitle() {
    return this.title;
  }

  setTitle(title: string) {
    this.title = title;
  }

  getSlug() {
    return this.slug;
  }

  setSlug(slug: string) {
    this.slug = slug;
  }

  getThumbnailId() {
    return this.thumbnailId;
  }

  setThumbnailId(thumbnailId: number) {
    this.thumbnailId = thumbnailId;
  }

  setCategoryIds(categoryIds: number[]) {
    this.categoryIds = categoryIds;
  }

  getCategoryIds() {
    return this.categoryIds;
  }

  setRelatedImageIds(relatedImageIds: number[]) {
    this.relatedImageIds = relatedImageIds;
  }

  getRelatedImageIds() {
    return this.relatedImageIds;
  }

  getContent() {
    return this.content;
  }

  setContent(content: string) {
    this.content = content;
  }

  getStatus() {
    return this.status;
  }

  setStatus(status: string) {
    this.status = status;
  }

  getOwnerId() {
    return this.ownerId;
  }

  setOwnerId(ownerId: number) {
    this.ownerId = ownerId;
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
