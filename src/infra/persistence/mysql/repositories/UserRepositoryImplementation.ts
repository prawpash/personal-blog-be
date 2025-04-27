import User from '@core/domain/entities/User';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/UserEntity';
import { Equal, Not, Repository } from 'typeorm';
import UserBuilder from '@core/domain/builders/UserBuilder';
import { UserRepository } from '@core/application/repositories/UserRepository';
import { UpdateUserDTO } from '@core/application/dtos/user/UpdateUserDTO';
import { UserResponseDTO } from '@core/application/dtos/user/UserResponseDTO';

@Injectable()
export class UserRepositoryImplementation implements UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  async findByUsername(username: string): Promise<UserResponseDTO | null> {
    const userByUsername = await this.userRepository.findOneBy({ username });

    if (!userByUsername) return null;

    const user = new UserResponseDTO(
      userByUsername.id,
      userByUsername.name,
      userByUsername.username,
      userByUsername.email,
      userByUsername.createdAt,
      userByUsername.updatedAt,
    );

    return user;
  }

  async findByUsernameExceptForId(
    username: string,
    userId: number,
  ): Promise<UserResponseDTO | null> {
    const userByUsernameExceptForId = await this.userRepository.findOneBy({
      username,
      id: Not(Equal(userId)),
    });

    if (!userByUsernameExceptForId) return null;

    const user = new UserResponseDTO(
      userByUsernameExceptForId.id,
      userByUsernameExceptForId.name,
      userByUsernameExceptForId.username,
      userByUsernameExceptForId.email,
      userByUsernameExceptForId.createdAt,
      userByUsernameExceptForId.updatedAt,
    );

    return user;
  }

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

  async findByEmailExceptForId(
    email: string,
    userId: number,
  ): Promise<UserResponseDTO | null> {
    const userByEmailExceptForId = await this.userRepository.findOneBy({
      email,
      id: Not(Equal(userId)),
    });

    if (!userByEmailExceptForId) return null;

    const user = new UserResponseDTO(
      userByEmailExceptForId.id,
      userByEmailExceptForId.name,
      userByEmailExceptForId.username,
      userByEmailExceptForId.email,
      userByEmailExceptForId.createdAt,
      userByEmailExceptForId.updatedAt,
    );

    return user;
  }

  async create(user: User): Promise<UserResponseDTO> {
    const data: Partial<UserEntity> = {
      name: user.getName(),
      username: user.getUsername(),
      email: user.getEmail(),
      password: user.getPassword(),
    };

    const createdUser = await this.userRepository.save(data);

    const formattedUser = new UserResponseDTO(
      createdUser.id,
      createdUser.name,
      createdUser.username,
      createdUser.email,
      createdUser.createdAt,
      createdUser.updatedAt,
    );

    return formattedUser;
  }

  async update(
    userId: number,
    payload: UpdateUserDTO,
  ): Promise<UserResponseDTO> {
    const updatedUser = await this.userRepository.save({
      id: userId,
      ...payload,
    });

    const formattedUser = new UserResponseDTO(
      updatedUser.id,
      updatedUser.name,
      updatedUser.username,
      updatedUser.email,
      updatedUser.createdAt,
      updatedUser.updatedAt,
    );

    return formattedUser;
  }

  async deleteById(userId: number): Promise<void> {
    await this.userRepository.delete({ id: userId });
  }
}
