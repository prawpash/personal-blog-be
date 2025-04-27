import { UpdateUserDTO } from '@core/application/dtos/user/UpdateUserDTO';
import UserBuilder from '@core/domain/builders/UserBuilder';
import User from '@core/domain/entities/User';
import { CreateUserRequestDTO } from '@presentation/dtos/user/CreateUserRequestDTO';
import { UpdateUserRequestDTO } from '@presentation/dtos/user/UpdateUserRequestDTO';

export class UserMapper {
  static toApplicationCreateDTO(dto: CreateUserRequestDTO): User {
    return new UserBuilder()
      .setName(dto.name)
      .setUsername(dto.username)
      .setEmail(dto.email)
      .setPassword(dto.password)
      .build();
  }

  static toApplicationUpdateDTO(dto: UpdateUserRequestDTO): UpdateUserDTO {
    return new UpdateUserDTO(dto.name, dto.username, dto.email);
  }
}
