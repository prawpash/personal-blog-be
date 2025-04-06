import { InjectionToken } from '@infra/config/injectionToken.config';
import { TypeORMDataSourceOptions } from '@infra/config/typeorm.config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepositoryImplementation } from './repositories/UserRepositoryImplementation';
import { UserEntity } from './entities/UserEntity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        ...TypeORMDataSourceOptions,
      }),
    }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  providers: [
    {
      provide: InjectionToken.USER_REPOSITORY,
      useClass: UserRepositoryImplementation,
    },
  ],
  exports: [InjectionToken.USER_REPOSITORY],
})
export class MysqlModule {}
