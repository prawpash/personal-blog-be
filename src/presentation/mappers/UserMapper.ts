import UserBuilder from '@core/domain/builders/UserBuilder';
import User from '@core/domain/entities/User';
import { CreateUserRequestDTO } from '@presentation/dtos/user/CreateUserRequestDTO';

export class UserMapper {
  static toApplicationCreateDTO(dto: CreateUserRequestDTO): User {
    return new UserBuilder()
      .setName(dto.name)
      .setUsername(dto.username)
      .setEmail(dto.email)
      .setPassword(dto.password)
      .build();
  }
}
