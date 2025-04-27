import { InjectionToken } from '@infra/config/injectionToken.config';
import { TypeORMDataSourceOptions } from '@infra/config/typeorm.config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepositoryImplementation } from './repositories/UserRepositoryImplementation';
import { UserEntity } from './entities/UserEntity';
import { ImageRepositoryImplementation } from './repositories/ImageRepository';
import { ImageEntity } from './entities/ImageEntity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        ...TypeORMDataSourceOptions,
      }),
    }),
    TypeOrmModule.forFeature([UserEntity, ImageEntity]),
  ],
  providers: [
    {
      provide: InjectionToken.USER_REPOSITORY,
      useClass: UserRepositoryImplementation,
    },
    {
      provide: InjectionToken.IMAGE_REPOSITORY,
      useClass: ImageRepositoryImplementation,
    },
  ],
  exports: [InjectionToken.USER_REPOSITORY, InjectionToken.IMAGE_REPOSITORY],
})
export class MysqlModule {}
