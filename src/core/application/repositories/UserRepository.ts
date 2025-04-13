import { UpdateUserDTO } from '@core/application/dtos/user/UpdateUserDTO';
import User from '@core/domain/entities/User';

export interface UserRepository {
  findById(userId: number): Promise<User | null>;

  findByEmail(email: string): Promise<User | null>;

  findByUsername(username: string): Promise<User | null>;

  create(user: User): Promise<User>;

  update(userId: number, payload: UpdateUserDTO): Promise<void>;

  deleteById(userId: number): Promise<void>;
}
