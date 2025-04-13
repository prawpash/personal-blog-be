import { UserRepository } from '@core/application/repositories/UserRepository';

export default class GetUserByEmailUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(email: string) {
    return await this.userRepository.findByEmail(email);
  }
}
