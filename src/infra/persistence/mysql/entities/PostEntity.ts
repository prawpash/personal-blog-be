import { PostStatus } from '@core/domain/enums/PostStatus';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CategoryEntity } from './CategoryEntity';
import { UserEntity } from './UserEntity';
import { ImageEntity } from './ImageEntity';

@Entity('post')
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text', unique: true })
  slug: string;

  @OneToOne(() => ImageEntity)
  @JoinColumn({ name: 'thumbnail_id' })
  thumbnail: ImageEntity;

  @ManyToMany(() => CategoryEntity, (category) => category.posts)
  @JoinTable({
    name: 'posts_with_categories',
    joinColumn: {
      name: 'post_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'category_id',
      referencedColumnName: 'id',
    },
  })
  categories: CategoryEntity[];

  @ManyToMany(() => ImageEntity)
  @JoinTable({
    name: 'images_related_to_post',
    joinColumn: {
      name: 'post_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'image_id',
      referencedColumnName: 'id',
    },
  })
  relatedImages: ImageEntity[];

  @Column({ type: 'text', nullable: true })
  content: string | null;

  @Column({
    type: 'enum',
    enum: PostStatus,
    default: PostStatus.DRAFT,
  })
  status: PostStatus;

  @ManyToOne(() => UserEntity, (author) => author.posts)
  author: UserEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
