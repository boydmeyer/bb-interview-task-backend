import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

import { Media } from 'src/media/entities/media.entity';

export default class TypeOrmConfig {
  static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: configService.get('POSTGRES_HOST'),
      port: configService.get('POSTGRES_PORT'),
      username: configService.get('POSTGRES_USER'),
      password: configService.get('POSTGRES_PASS'),
      database: configService.get('POSTGRES_DATABASE'),
      autoLoadEntities: true,
      entities: [Media],
      ssl: false,
      synchronize: true,
    };
  }
}

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (
    configService: ConfigService,
  ): Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),
  inject: [ConfigService],
};
