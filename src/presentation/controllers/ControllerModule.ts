import { Module } from '@nestjs/common';
import { CategoryController } from './CategoryController';
import { PostController } from './PostController';
import { EnvModule } from '@infra/env/env.module';
import { ImageController } from './ImageController';
import { UserController } from './UserController';
import { LoggerModule } from '@infra/logger/LoggerModule';

@Module({
  imports: [LoggerModule, EnvModule],
  controllers: [
    CategoryController,
    PostController,
    ImageController,
    UserController,
  ],
})
export class ControllerModule {}
