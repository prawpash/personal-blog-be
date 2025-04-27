import { Module } from '@nestjs/common';
import { CategoryController } from './CategoryController';
import { PostController } from './PostController';
import { EnvModule } from '@infra/env/env.module';
import { ImageController } from './ImageController';
import { UserController } from './UserController';
import { LoggerModule } from '@infra/logger/LoggerModule';
import { MysqlModule } from '@infra/persistence/mysql/mysql.module';
import BcryptModule from '@infra/bcrypt/BcryptModule';

@Module({
  imports: [LoggerModule, EnvModule, MysqlModule, BcryptModule],
  controllers: [
    CategoryController,
    PostController,
    ImageController,
    UserController,
  ],
})
export class ControllerModule { }
