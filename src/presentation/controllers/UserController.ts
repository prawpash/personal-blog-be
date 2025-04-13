import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  Inject,
  NotFoundException,
  Param,
  Post,
  Put,
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

@Controller('users')
export class UserController {
  constructor(
    @Inject(InjectionToken.LOGGER)
    private readonly logger: Logger,
    @Inject(InjectionToken.USER_REPOSITORY)
    private readonly userRepository: UserRepository,
    @Inject(InjectionToken.PASSWORD_SERVICE)
    private readonly passwordService: PasswordService,
  ) {}

  @Get(':username')
  async getUserByUsername(@Param('username') username: string) {
    try {
      const getUserByUsernameUseCase = new GetUserByUsernameUseCase(
        this.userRepository,
      );

      const user = await getUserByUsernameUseCase.execute(username);

      console.log(user);

      return 'halo';

      // return user;
    } catch (error) {
      if (error instanceof CoreNotFoundException) {
        throw new NotFoundException(error.message);
      }

      throw error;
    }
  }

  @Post()
  async createUser(@Body() createUserDTO: CreateUserRequestDTO) {
    try {
      const createUserUseCase = new CreateUserUseCase(
        this.userRepository,
        this.passwordService,
      );

      const userFromDTO = UserMapper.toApplicationCreateDTO(createUserDTO);

      const createdUser = await createUserUseCase.execute(userFromDTO);

      this.logger.debug(createdUser);

      return 'Create user';
    } catch (error) {
      if (error instanceof CoreConflictException) {
        throw new ConflictException(error.message);
      }

      throw error;
    }
  }

  @Put(':id')
  updateUser(
    @Param() params: IdValidationDTO,
    @Body() updatedUserDTO: UpdateUserRequestDTO,
  ) {
    const { id } = params;

    this.logger.debug(updatedUserDTO);

    return `Update use by id: ${id}`;
  }

  @Delete(':id')
  deleteUser(@Param() params: IdValidationDTO) {
    const { id } = params;

    return `Delete user by id: ${id}`;
  }
}
