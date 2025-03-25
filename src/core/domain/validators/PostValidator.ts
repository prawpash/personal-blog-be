export default class PostValidator {
  static validate(
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
    if (id && typeof id !== 'number') {
      throw new Error('id must be a number');
    }

    if (!title || title.trim() === '') {
      throw new Error('title is required');
    }

    if (!slug || slug.trim() === '') {
      throw new Error('slug is required');
    }

    if (typeof thumbnailId !== 'number') {
      throw new Error('thumbnailId must be a number');
    }

    if (thumbnailId < 1) {
      throw new Error('Invalid thumbnailId');
    }

    if (
      categoryIds.length > 0 &&
      categoryIds.some((id) => typeof id !== 'number')
    ) {
      throw new Error('categoryIds must be a number');
    }

    if (
      relatedImageIds.length > 0 &&
      relatedImageIds.some((id) => typeof id !== 'number')
    ) {
      throw new Error('relatedImageIds must be a number');
    }

    if (!content || content.trim() === '') {
      throw new Error('content is required');
    }

    if (!status || status.trim() === '') {
      throw new Error('status is required');
    }

    if (typeof ownerId !== 'number') {
      throw new Error('ownerId must be a number');
    }

    if (ownerId < 1) {
      throw new Error('Invalid ownerId');
    }
  }
}
