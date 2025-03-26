import { Module } from '@nestjs/common';
import { CategoryController } from './CategoryController';
import { PostController } from './PostController';
import { LoggerModule } from '@infra/logging/LoggerModule';
import { EnvModule } from '@infra/env/env.module';
import { ImageController } from './ImageController';
import { UserController } from './UserController';

@Module({
  imports: [LoggerModule, EnvModule],
  controllers: [
    CategoryController,
    PostController,
    ImageController,
    UserController,
  ],
})
export class ControllerModule { }
