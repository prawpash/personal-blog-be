import Post from '@core/domain/entities/Post';
import PostValidator from '@core/domain/validators/PostValidator';
import { PostStatus } from '@core/domain/enums/PostStatus';

export default class PostBuilder {
  private id: number | null;
  private title: string;
  private slug: string;
  private thumbnailId: number;
  private categoryIds: number[];
  private relatedImageIds: number[];
  private content: string;
  private status: PostStatus;
  private ownerId: number;

  constructor() {
    this.id = null;
    this.title = '';
    this.slug = '';
    this.thumbnailId = 0;
    this.categoryIds = [];
    this.relatedImageIds = [];
    this.content = '';
    this.status = PostStatus.DRAFT;
    this.ownerId = 0;
  }

  build() {
    PostValidator.validate(
      this.id,
      this.title,
      this.slug,
      this.thumbnailId,
      this.categoryIds,
      this.relatedImageIds,
      this.content,
      this.status,
      this.ownerId,
    );

    return new Post(
      this.id,
      this.title,
      this.slug,
      this.thumbnailId,
      this.categoryIds,
      this.relatedImageIds,
      this.content,
      this.status,
      this.ownerId,
    );
  }

  setId(id: number) {
    this.id = id;
  }

  setTitle(title: string) {
    this.title = title;
  }

  setSlug(slug: string) {
    this.slug = slug;
  }

  setThumbnailId(thumbnailId: number) {
    this.thumbnailId = thumbnailId;
  }

  setCategoryIds(categoryIds: number[]) {
    this.categoryIds = categoryIds;
  }

  setRelatedImageIds(relatedImageIds: number[]) {
    this.relatedImageIds = relatedImageIds;
  }

  setContent(content: string) {
    this.content = content;
  }

  setStatus(status: PostStatus) {
    this.status = status;
  }

  setOwnerId(ownerId: number) {
    this.ownerId = ownerId;
  }
}
