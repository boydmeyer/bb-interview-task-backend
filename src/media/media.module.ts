import { Media } from './entities/media.entity';
import { MediaController } from './media.controller';
import { MediaService } from './media.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Media]), //import entity for repository
  ],
  controllers: [MediaController], //import controllers
  providers: [MediaService], //import services
})
export class MediaModule {}
