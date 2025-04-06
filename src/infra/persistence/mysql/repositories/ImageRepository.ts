import Image from '@core/domain/entities/Image';
import { ImageRepository } from '@core/domain/repositories/ImageRepository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ImageEntity } from '../entities/ImageEntity';
import { Repository } from 'typeorm';
import ImageBuilder from '@core/domain/builders/ImageBuilder';

@Injectable()
export class ImageRepositoryImplementation implements ImageRepository {
  constructor(
    @InjectRepository(ImageEntity)
    private readonly imageRepository: Repository<ImageEntity>,
  ) {}

  async findById(id: number): Promise<Image | null> {
    const imageById = await this.imageRepository.findOneBy({ id });

    if (!imageById) return null;

    const image = new ImageBuilder()
      .setId(imageById.id)
      .setFileName(imageById.fileName)
      .setFileLocation(imageById.fileLocation)
      .setCreatedAt(imageById.createdAt)
      .setUpdatedAt(imageById.updatedAt)
      .build();

    return image;
  }

  async create(image: Image): Promise<Image> {
    const data: Partial<ImageEntity> = {
      fileName: image.getFileName(),
      fileLocation: image.getFileLocation(),
    };

    const createdImage = await this.imageRepository.save(data);

    const formattedImage = new ImageBuilder()
      .setId(createdImage.id)
      .setFileName(createdImage.fileName)
      .setFileLocation(createdImage.fileLocation)
      .setCreatedAt(createdImage.createdAt)
      .setUpdatedAt(createdImage.updatedAt)
      .build();

    return formattedImage;
  }

  async deleteById(imageId: number): Promise<void> {
    await this.imageRepository.delete({ id: imageId });
  }
}
