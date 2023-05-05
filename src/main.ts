import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerService } from './swagger/swagger.service';

const validationPipe = new ValidationPipe({
  whitelist: true,
  transform: true,
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  SwaggerService.setup(app);

  await app.useGlobalPipes(validationPipe).listen(3333);
}

bootstrap();
