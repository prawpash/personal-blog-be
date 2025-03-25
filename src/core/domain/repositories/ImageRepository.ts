import Image from '@core/domain/entities/Image';

export interface ImageRepository {
  findById(id: number): Promise<Image | null>;

  findByName(fileName: string): Promise<Image | null>;

  create(image: Image): Promise<string>;

  deleteById(imageId: number): Promise<void>;
}
