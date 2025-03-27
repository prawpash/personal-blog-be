import { TypeORMDataSourceOptions } from '@infra/config/typeorm.config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        ...TypeORMDataSourceOptions,
      }),
    }),
  ],
  providers: [],
  exports: [],
})
export class MysqlModule { }
