import { UserRepository } from '@core/domain/repositories/UserRepository';

export default class GetUserByEmailUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(email: string) {
    return await this.userRepository.findByEmail(email);
  }
}
