import { PasswordService } from '@core/application/services/PasswordService';
import User from '@core/domain/entities/User';
import { UserRepository } from '@core/domain/repositories/UserRepository';
import { ConflictException } from '@nestjs/common';

export default class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordService: PasswordService,
  ) { }

  async execute(user: User) {
    // the user email must be unique
    const userWithSameEmail = await this.userRepository.findByEmail(
      user.getEmail(),
    );

    if (userWithSameEmail) {
      throw new ConflictException(
        'This email is already in use. Please use another.',
      );
    }

    // the user username must be unique
    const userWithSameUsername = await this.userRepository.findByUsername(
      user.getUsername(),
    );

    if (userWithSameUsername) {
      throw new ConflictException(
        'This username is already in use. Please use another.',
      );
    }

    // Hashing user password before saving to the database
    const hashedPassword = await this.passwordService.hash(user.getPassword());

    user.setPassword(hashedPassword);

    // Saving user to the database
    const savedUser = await this.userRepository.create(user);

    return savedUser;
  }
}
