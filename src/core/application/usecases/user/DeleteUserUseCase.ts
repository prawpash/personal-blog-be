import { UserRepository } from '@core/application/repositories/UserRepository';
import { NotFoundException } from '@core/exceptions/NotFoundException';

export default class DeleteUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userId: number) {
    const userById = await this.userRepository.findById(userId);

    if (!userById) {
      throw new NotFoundException('User with this id does not exist');
    }

    // Delete user from database
    await this.userRepository.deleteById(userId);
  }
}
