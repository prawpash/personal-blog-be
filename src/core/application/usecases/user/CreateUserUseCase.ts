import { PasswordService } from '@core/application/services/PasswordService';
import User from '@core/domain/entities/User';
import { UserRepository } from '@core/domain/repositories/UserRepository';

export default class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordService: PasswordService,
  ) {}

  async execute(user: User) {
    // Hashing user password before saving to the database
    const hashedPassword = await this.passwordService.hash(user.getPassword());

    user.setPassword(hashedPassword);

    // Saving user to the database
    const savedUser = await this.userRepository.create(user);

    return savedUser;
  }
}
