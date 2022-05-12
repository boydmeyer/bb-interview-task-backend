import { ConfigModule } from '@nestjs/config';
import { MediaModule } from './media/media.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigAsync } from './config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    MediaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
