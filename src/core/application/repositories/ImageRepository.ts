import Image from '@core/domain/entities/Image';

export interface ImageRepository {
  findById(id: number): Promise<Image | null>;

  create(image: Image): Promise<Image>;

  deleteById(imageId: number): Promise<void>;
}
