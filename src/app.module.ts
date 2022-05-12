import { ConfigModule } from '@nestjs/config';
import { MediaModule } from './media/media.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigAsync } from './config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), //import config module for environment variables
    TypeOrmModule.forRootAsync(typeOrmConfigAsync), //import typeorm module for database connection
    MediaModule, //import media module
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
