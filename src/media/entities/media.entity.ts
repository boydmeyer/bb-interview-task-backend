import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Media {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * @description placeholdd post ID
   */
  @Column()
  postId: string;

  /**
   * @description mediaclip ID for Blue Billy Wig platform
   */
  @Column()
  mediaId: string;
}
