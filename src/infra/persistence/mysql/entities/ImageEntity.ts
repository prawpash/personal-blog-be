import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('image')
export class ImageEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'file_name', type: 'text' })
  fileName: string;

  @Column({ name: 'file_location', type: 'text' })
  fileLocation: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
