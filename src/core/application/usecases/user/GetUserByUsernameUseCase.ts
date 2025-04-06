import { UserRepository } from '@core/domain/repositories/UserRepository';
import { NotFoundException } from '@core/exceptions/NotFoundException';

export default class GetUserByUsernameUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(username: string) {
    const userByUsername = await this.userRepository.findByUsername(username);

    if (!userByUsername) {
      throw new NotFoundException(
        'The user with this username does not exist.',
      );
    }

    return userByUsername;
  }
}
