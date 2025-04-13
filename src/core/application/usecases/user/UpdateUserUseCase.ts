import { UpdateUserDTO } from '@core/application/dtos/user/UpdateUserDTO';
import { ImageRepository } from '@core/application/repositories/ImageRepository';
import { UserRepository } from '@core/application/repositories/UserRepository';
import { NotFoundException } from '@core/exceptions/NotFoundException';

export default class UpdateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly imageRepository: ImageRepository,
  ) {}

  async execute(userId: number, payload: UpdateUserDTO) {
    const userById = await this.userRepository.findById(userId);

    if (!userById) {
      throw new NotFoundException('User with this id does not exist');
    }

    const updatedUserPayload: UpdateUserDTO = {};

    if (payload.name) {
      updatedUserPayload.name = payload.name;
    }

    if (payload.username) {
      updatedUserPayload.username = payload.username;
    }

    if (payload.email) {
      updatedUserPayload.email = payload.email;
    }

    if (payload.profilePictureId) {
      const imageById = await this.imageRepository.findById(
        payload.profilePictureId,
      );

      if (!imageById) {
        throw new NotFoundException('Image with this id does not exist');
      }

      updatedUserPayload.profilePictureId = payload.profilePictureId;
    }

    // Update user in database
    await this.userRepository.update(userId, updatedUserPayload);
  }
}
