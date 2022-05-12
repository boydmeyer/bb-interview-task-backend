import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateMediaDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 255)
  postId: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 255)
  mediaId: string;
}
