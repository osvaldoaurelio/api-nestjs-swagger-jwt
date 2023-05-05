import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { SwaggerModule } from './swagger/swagger.module';

@Module({
  imports: [
    AuthModule,
    BookmarkModule,
    ConfigModule.forRoot(),
    PrismaModule,
    UserModule,
    SwaggerModule,
  ],
})
export class AppModule {}
