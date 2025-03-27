import { Env } from '@infra/env/env';
import { EnvService } from '@infra/env/env.service';
import { ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import 'dotenv/config';

const configService = new ConfigService<Env, true>();

const envService = new EnvService(configService);

export const TypeORMDataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: envService.get('DATABASE_HOST'),
  port: envService.get('DATABASE_PORT'),
  username: envService.get('DATABASE_USER'),
  password: envService.get('DATABASE_PASSWORD'),
  database: envService.get('DATABASE_NAME'),
  entities: [`${__dirname}/../persistence/mysql/entities/*.ts`],
  synchronize: false,
  migrations: [`${__dirname}/../persistence/mysql/migrations/*.ts`],
  migrationsTableName: 'migrations',
};

export default new DataSource(TypeORMDataSourceOptions);
