import { INestApplication, Injectable } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { customCss } from './assets';

@Injectable()
export class SwaggerService {
  static setup(app: INestApplication) {
    const config = new DocumentBuilder()
      .setTitle('My API')
      .setDescription('API description')
      .setVersion('1.0')
      .addTag('Auth', 'a short description about Auth')
      .addTag('Agenda', 'a short description about Agenda')
      .addTag('Bookmarks', 'a short description about Bookmarks')
      .addTag('Users', 'a short description about Users')
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, config);

    const options: SwaggerCustomOptions = {
      customSiteTitle: 'custom Site Title',
      customCss,
      customfavIcon: './assets/favicon.ico',
    };

    SwaggerModule.setup('api-doc', app, document, options);
  }
}
