import Post from '@core/domain/entities/Post';

export interface PostRepository {
  findAll({
    pageNumber,
    pageSize,
  }: {
    pageSize: number;
    pageNumber: number;
  }): Promise<Post[]>;

  findById(
    id: number,
    { includeThumbnail }: { includeThumbnail: boolean },
  ): Promise<Post | null>;

  findBySlug(
    slug: string,
    { includeThumbnail }: { includeThumbnail: boolean },
  ): Promise<Post | null>;

  create(post: Post): Promise<Post>;

  update(post: Post): Promise<Post>;

  deleteById(postId: number): Promise<void>;
}
