import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerService } from './common/modules/swagger/swagger.service';

const ROUTE_PATH_PREFIX = '/v1/api';

const validationPipe = new ValidationPipe({
  whitelist: true,
  transform: true,
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  SwaggerService.setup(app);

  app.enableCors();
  app.setGlobalPrefix(ROUTE_PATH_PREFIX);
  app.useGlobalPipes(validationPipe);

  await app.listen(3333);
}

bootstrap();
