import User from '@core/domain/entities/User';

export interface UserRepository {
  findByEmail(email: string): Promise<User | null>;

  create(user: User): Promise<User>;

  update(user: User): Promise<User>;

  deleteById(userId: number): Promise<void>;
}
