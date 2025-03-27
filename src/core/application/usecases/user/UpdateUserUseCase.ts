import { UpdateUserPayload } from '@core/domain/dto/UpdateUserPayload';
import { UserRepository } from '@core/domain/repositories/UserRepository';
import { NotFoundException } from '@core/exceptions/NotFoundException';

export default class UpdateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userId: number, payload: UpdateUserPayload) {
    const userById = await this.userRepository.findById(userId);

    if (!userById) {
      throw new NotFoundException('User with this id does not exist');
    }

    const updatedUserPayload: UpdateUserPayload = {};

    if (payload.name) {
      updatedUserPayload.name = payload.name;
    }

    if (payload.username) {
      updatedUserPayload.username = payload.username;
    }

    if (payload.email) {
      updatedUserPayload.email = payload.email;
    }

    // TODO: Add profile picture update

    const updatedUser = await this.userRepository.update(
      userId,
      updatedUserPayload,
    );

    return updatedUser;
  }
}
