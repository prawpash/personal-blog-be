import User from '@core/domain/entities/User';
import { UserRepository } from '@core/domain/repositories/UserRepository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/UserEntity';
import { Repository } from 'typeorm';
import UserBuilder from '@core/domain/builders/UserBuilder';
import { UpdateUserPayload } from '@core/domain/dto/UpdateUserPayload';

@Injectable()
export class UserRepositoryImplementation implements UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findById(userId: number): Promise<User | null> {
    const userById = await this.userRepository.findOneBy({ id: userId });

    if (userById) {
      const user = new UserBuilder()
        .setId(userById.id)
        .setName(userById.name)
        .setUsername(userById.username)
        .setEmail(userById.email)
        .setPassword(userById.password)
        .setCreatedAt(userById.createdAt)
        .setUpdatedAt(userById.updatedAt)
        .build();

      return user;
    }

    return null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const userByEmail = await this.userRepository.findOneBy({ email });

    if (userByEmail) {
      const user = new UserBuilder()
        .setId(userByEmail.id)
        .setName(userByEmail.name)
        .setUsername(userByEmail.username)
        .setEmail(userByEmail.email)
        .setPassword(userByEmail.password)
        .setCreatedAt(userByEmail.createdAt)
        .setUpdatedAt(userByEmail.updatedAt)
        .build();

      return user;
    }

    return null;
  }

  async create(user: User): Promise<User> {
    const data: Partial<UserEntity> = {
      name: user.getName(),
      username: user.getUsername(),
      email: user.getEmail(),
      password: user.getPassword(),
    };

    const createdUser = await this.userRepository.save(data);

    const formattedUser = new UserBuilder()
      .setId(createdUser.id)
      .setName(createdUser.name)
      .setUsername(createdUser.username)
      .setEmail(createdUser.email)
      .setPassword(createdUser.password)
      .setCreatedAt(createdUser.createdAt)
      .setUpdatedAt(createdUser.updatedAt)
      .build();

    return formattedUser;
  }

  async update(userId: number, payload: UpdateUserPayload): Promise<User> {
    const updatedUser = await this.userRepository.save({
      id: userId,
      ...payload,
    });

    const formattedUser = new UserBuilder()
      .setId(updatedUser.id)
      .setName(updatedUser.name)
      .setUsername(updatedUser.username)
      .setEmail(updatedUser.email)
      .setPassword(updatedUser.password)
      .setCreatedAt(updatedUser.createdAt)
      .setUpdatedAt(updatedUser.updatedAt)
      .build();

    return formattedUser;
  }

  async deleteById(userId: number): Promise<void> {
    await this.userRepository.delete({ id: userId });
  }
}
