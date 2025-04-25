import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  Inject,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Logger } from '@core/application/services/Logger';
import { InjectionToken } from '@infra/config/injectionToken.config';
import GetUserByUsernameUseCase from '@core/application/usecases/user/GetUserByUsernameUseCase';
import { NotFoundException as CoreNotFoundException } from '@core/exceptions/NotFoundException';
import { ConflictException as CoreConflictException } from '@core/exceptions/ConflictException';
import CreateUserUseCase from '@core/application/usecases/user/CreateUserUseCase';
import { PasswordService } from '@core/application/services/PasswordService';
import { CreateUserRequestDTO } from '@presentation/dtos/user/CreateUserRequestDTO';
import { IdValidationDTO } from '@presentation/dtos/IdValidationDTO';
import { UpdateUserRequestDTO } from '@presentation/dtos/user/UpdateUserRequestDTO';
import { UserMapper } from '@presentation/mappers/UserMapper';
import { UserRepository } from '@core/application/repositories/UserRepository';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserResponseDTO } from '@core/application/dtos/user/UserResponseDTO';
import UpdateUserUseCase from '@core/application/usecases/user/UpdateUserUseCase';
import { ImageRepository } from '@core/application/repositories/ImageRepository';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(
    @Inject(InjectionToken.LOGGER)
    private readonly logger: Logger,
    @Inject(InjectionToken.USER_REPOSITORY)
    private readonly userRepository: UserRepository,
    @Inject(InjectionToken.PASSWORD_SERVICE)
    private readonly passwordService: PasswordService,
    @Inject(InjectionToken.IMAGE_REPOSITORY)
    private readonly imageRepository: ImageRepository,
  ) {}

  @ApiOperation({
    summary: 'Find user by username',
  })
  @ApiParam({
    name: 'username',
    description: 'Username of the user',
    example: 'sopo',
    required: true,
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'Response when user found',
    type: UserResponseDTO,
    example: {
      id: 1,
      name: 'Sopo',
      username: 'sopo',
      email: 'sopo@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Response when user not found',
    example: {
      message: 'The user with this username does not exist.',
      error: 'Not Found',
      statusCode: 404,
    },
  })
  @Get(':username')
  async getUserByUsername(@Param('username') username: string) {
    try {
      const getUserByUsernameUseCase = new GetUserByUsernameUseCase(
        this.userRepository,
      );

      const user = await getUserByUsernameUseCase.execute(username);

      return user;
    } catch (error) {
      if (error instanceof CoreNotFoundException) {
        throw new NotFoundException(error.message);
      }

      throw error;
    }
  }

  @ApiOperation({
    summary: 'Create new user',
  })
  @ApiBody({
    type: CreateUserRequestDTO,
  })
  @ApiResponse({
    status: 201,
    description: 'Response when user created',
    type: UserResponseDTO,
    example: {
      id: 1,
      name: 'Sopo',
      username: 'sopo',
      email: 'sopo@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  })
  @ApiResponse({
    status: 409,
    description: 'Response when email or username already exists',
    examples: {
      'email-already-exists': {
        value: {
          message: 'This email is already in use. Please use another.',
          error: 'Conflict',
          statusCode: 409,
        },
        summary: 'Email already exists',
      },
      'username-already-exists': {
        value: {
          message: 'This username is already in use. Please use another.',
          error: 'Conflict',
          statusCode: 409,
        },
        summary: 'Username already exists',
      },
    },
  })
  @Post()
  async createUser(@Body() createUserDTO: CreateUserRequestDTO) {
    try {
      const createUserUseCase = new CreateUserUseCase(
        this.userRepository,
        this.passwordService,
      );

      const userFromDTO = UserMapper.toApplicationCreateDTO(createUserDTO);

      const createdUser = await createUserUseCase.execute(userFromDTO);

      return createdUser;
    } catch (error) {
      if (error instanceof CoreConflictException) {
        throw new ConflictException(error.message);
      }

      throw error;
    }
  }

  @ApiOperation({
    summary: 'Update user',
  })
  @ApiParam({
    name: 'id',
    description: 'Id of the user',
    required: true,
    type: String,
  })
  @ApiBody({
    type: UpdateUserRequestDTO,
  })
  @ApiResponse({
    status: 201,
    description: 'Response when user created',
    type: UserResponseDTO,
    example: {
      id: 1,
      name: 'Sopo',
      username: 'sopo',
      email: 'sopo@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  })
  @ApiResponse({
    status: 409,
    description: 'Response when email or username already exists',
    examples: {
      'email-already-exists': {
        value: {
          message: 'This email is already in use. Please use another.',
          error: 'Conflict',
          statusCode: 409,
        },
        summary: 'Email already exists',
      },
      'username-already-exists': {
        value: {
          message: 'This username is already in use. Please use another.',
          error: 'Conflict',
          statusCode: 409,
        },
        summary: 'Username already exists',
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Response when user not found',
    examples: {
      'user-not-found': {
        value: {
          message: 'User with this id does not exist',
          error: 'Not Found',
          statusCode: 404,
        },
        summary: 'User not found',
      },
      'image-not-found': {
        value: {
          message: 'Image with this id does not exist',
          error: 'Not Found',
          statusCode: 404,
        },
        summary: 'Image not found',
      },
    },
  })
  @Patch(':id')
  async updateUser(
    @Param() params: IdValidationDTO,
    @Body() updatedUserDTO: UpdateUserRequestDTO,
  ) {
    try {
      const { id } = params;

      const updateUserUseCase = new UpdateUserUseCase(
        this.userRepository,
        this.imageRepository,
      );

      const updatedUserPayloadFromDTO =
        UserMapper.toApplicationUpdateDTO(updatedUserDTO);

      const updatedUser = await updateUserUseCase.execute(
        id,
        updatedUserPayloadFromDTO,
      );

      return updatedUser;
    } catch (error) {
      if (error instanceof CoreConflictException) {
        throw new ConflictException(error.message);
      }

      if (error instanceof CoreNotFoundException) {
        throw new NotFoundException(error.message);
      }

      throw error;
    }
  }

  @Delete(':id')
  deleteUser(@Param() params: IdValidationDTO) {
    const { id } = params;

    return `Delete user by id: ${id}`;
  }
}
