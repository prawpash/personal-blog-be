import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LoggerService } from '@infra/logging/LoggerService';
import { CreateUserDTO } from './dtos/user/CreateUserDTO';
import { IdValidationDTO } from './dtos/IdValidationDTO';
import { UpdateUserDTO } from './dtos/user/UpdateUserDTO';

@Controller('users')
export class UserController {
  constructor(private readonly logger: LoggerService) {
    this.logger.setContext(UserController.name);
  }

  @Get(':username')
  getUserByUsername(@Param('username') username: string) {
    return `Get user by username: ${username}`;
  }

  @Post()
  createUser(@Body() createUserDTO: CreateUserDTO) {
    this.logger.debug(createUserDTO);

    return 'Create user';
  }

  @Put(':id')
  updateUser(
    @Param() params: IdValidationDTO,
    @Body() updatedUserDTO: UpdateUserDTO,
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
