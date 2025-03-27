import User from '@core/domain/entities/User';
import { UpdateUserPayload } from '../dto/UpdateUserPayload';

export interface UserRepository {
  findById(userId: number): Promise<User | null>;

  findByEmail(email: string): Promise<User | null>;

  create(user: User): Promise<User>;

  update(userId: number, payload: UpdateUserPayload): Promise<void>;

  deleteById(userId: number): Promise<void>;
}
