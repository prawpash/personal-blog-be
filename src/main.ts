import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvService } from '@infra/env/env.service';
import { ValidationPipe } from '@nestjs/common';
import { LoggerService } from '@infra/logging/LoggerService';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  const configService = app.get(EnvService);
  const port = configService.get('PORT');

  app.useLogger(app.get(LoggerService));

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  await app.listen(port);
}

bootstrap();
