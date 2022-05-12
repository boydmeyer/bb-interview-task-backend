import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MediaService } from './media.service';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  /**
   * @description Creates a media record
   * @param createMediaDto CreateMediaDto
   * @returns Media
   */
  @Post()
  create(@Body() createMediaDto: CreateMediaDto) {
    return this.mediaService.create(createMediaDto);
  }

  /**
   * @description Finds all media records
   * @returns Media[]
   */
  @Get()
  findAll() {
    return this.mediaService.findAll();
  }

  /**
   * @description finds a media record by id
   * @param id string
   * @returns Media
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mediaService.findOne(id);
  }

  /**
   * @description Updates a media record
   * @param id string
   * @param updateMediaDto UpdateMediaDto
   * @returns Media
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMediaDto: UpdateMediaDto) {
    return this.mediaService.update(id, updateMediaDto);
  }

  /**
   * @description Deletes a media record
   * @param id string
   * @returns boolean
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mediaService.remove(id);
  }
}
