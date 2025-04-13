import { UpdateUserDTO } from '@core/application/dtos/user/UpdateUserDTO';
import User from '@core/domain/entities/User';
import { UserResponseDTO } from '@core/application/dtos/user/UserResponseDTO';

export interface UserRepository {
  findById(userId: number): Promise<User | null>;

  findByEmail(email: string): Promise<User | null>;

  findByUsername(username: string): Promise<UserResponseDTO | null>;

  create(user: User): Promise<UserResponseDTO>;

  update(userId: number, payload: UpdateUserDTO): Promise<void>;

  deleteById(userId: number): Promise<void>;
}
