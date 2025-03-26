import { EnvModule } from '@infra/env/env.module';
import { EnvService } from '@infra/env/env.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './entities/PostEntity';
import { ImageEntity } from './entities/ImageEntity';
import { CategoryEntity } from './entities/CategoryEntity';
import { UserEntity } from './entities/UserEntity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [EnvModule],
      useFactory: (envService: EnvService) => ({
        type: 'mysql',
        host: envService.get('DATABASE_HOST'),
        port: envService.get('DATABASE_PORT'),
        username: envService.get('DATABASE_USER'),
        password: envService.get('DATABASE_PASSWORD'),
        database: envService.get('DATABASE_NAME'),
        entities: [PostEntity, ImageEntity, CategoryEntity, UserEntity],
        synchronize: false,
        migrations: [

        ],
        migrationsTableName: 'migrations',
      }),
      inject: [EnvService],
    }),
  ],
  providers: [],
  exports: [],
})
export class MysqlModule {}
