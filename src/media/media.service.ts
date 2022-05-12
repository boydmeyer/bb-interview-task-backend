import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { Media } from './entities/media.entity';

@Injectable()
export class MediaService {
  constructor(
    @InjectRepository(Media) private mediaRepository: Repository<Media>,
  ) {}

  /**
   * @description Creates a media record
   * @param createMediaDto CreateMediaDto
   * @returns Promise<Media>
   */
  async create(createMediaDto: CreateMediaDto) {
    return await this.mediaRepository.save(createMediaDto);
  }

  /**
   * @description Finds all media records
   * @returns Promise<Media[]>
   */
  async findAll() {
    return await this.mediaRepository.find();
  }

  /**
   * @description Finds a media record by id
   * @param id string
   * @returns Promise<Media>
   */
  async findOne(id: string) {
    return await this.mediaRepository.findOne({ where: { postId: id } });
  }

  /**
   * @description Updates a media record
   * @param id string
   * @param updateMediaDto UpdateMediaDto
   * @returns Promise<Media>
   */
  async update(id: string, updateMediaDto: UpdateMediaDto) {
    return await this.mediaRepository.update(id, updateMediaDto);
  }

  /**
   * @description Deletes a media record
   * @param id string
   * @returns boolean
   */
  async remove(id: string) {
    return await this.mediaRepository.delete({ id });
  }
}
