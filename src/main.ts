import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvService } from '@infra/env/env.service';
import { ValidationPipe } from '@nestjs/common';
import { InjectionToken } from '@infra/config/injectionToken.config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  const configService = app.get(EnvService);
  const port = configService.get('PORT');

  app.useLogger(app.get(InjectionToken.LOGGER));

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  // Swagger Implementation
  const swaggerURL = '/swagger';

  const swaggerDocument = new DocumentBuilder()
    .setTitle('Personal Blog API')
    .setDescription('List of APIs for Personal Blog')
    .setVersion('0.0.1')
    .addTag('Personal Blog')
    .build();

  const swaggerDocumentFactory = () =>
    SwaggerModule.createDocument(app, swaggerDocument);

  SwaggerModule.setup(swaggerURL, app, swaggerDocumentFactory, { ui: false });

  // Scalar Implementation
  app.use(
    '/doc',
    apiReference({
      url: `${swaggerURL}-json`,
    }),
  );

  await app.listen(port);
}

void bootstrap();
