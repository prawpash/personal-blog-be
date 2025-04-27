import { UpdateUserDTO } from '@core/application/dtos/user/UpdateUserDTO';
import { UserResponseDTO } from '@core/application/dtos/user/UserResponseDTO';
import { ImageRepository } from '@core/application/repositories/ImageRepository';
import { UserRepository } from '@core/application/repositories/UserRepository';
import { ConflictException } from '@core/exceptions/ConflictException';
import { NotFoundException } from '@core/exceptions/NotFoundException';

export default class UpdateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly imageRepository: ImageRepository,
  ) {}

  async execute(
    userId: number,
    payload: UpdateUserDTO,
  ): Promise<UserResponseDTO> {
    const userById = await this.userRepository.findById(userId);

    if (!userById) {
      throw new NotFoundException('User with this id does not exist');
    }

    if (payload.username) {
      // check if username already exists
      const userByUsernameExceptForId =
        await this.userRepository.findByUsernameExceptForId(
          payload.username,
          userId,
        );

      if (userByUsernameExceptForId) {
        throw new ConflictException(
          'This username is already in use. Please use another.',
        );
      }
    }

    if (payload.email) {
      // check if email already exists
      const userByEmailExceptForId =
        await this.userRepository.findByEmailExceptForId(payload.email, userId);

      if (userByEmailExceptForId) {
        throw new ConflictException(
          'This email is already in use. Please use another.',
        );
      }
    }

    if (payload.profilePictureId) {
      const imageById = await this.imageRepository.findById(
        payload.profilePictureId,
      );

      if (!imageById) {
        throw new NotFoundException('Image with this id does not exist');
      }
    }

    // Update user in database
    const updatedUser = await this.userRepository.update(
      userById.getId()!,
      payload,
    );

    return updatedUser;
  }
}
