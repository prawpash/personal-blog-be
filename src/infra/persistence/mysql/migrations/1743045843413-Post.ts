import { MigrationInterface, QueryRunner } from 'typeorm';

export class Post1743045843413 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const createQuery = `CREATE TABLE \`post\` (
      \`id\` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      \`title\` VARCHAR(255) NOT NULL,
      \`slug\` VARCHAR(255) NOT NULL UNIQUE,
      \`thumbnail_id\` INT NULL,
      \`content\` TEXT NULL,
      \`status\` ENUM('DRAFT', 'PUBLISHED') NOT NULL DEFAULT 'DRAFT',
      \`author_id\` INT NOT NULL,
      \`created_at\` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      \`updated_at\` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      CONSTRAINT \`FK_post_thumbnail_id\` FOREIGN KEY (\`thumbnail_id\`) REFERENCES \`image\`(\`id\`) ON DELETE SET NULL,
      CONSTRAINT \`FK_post_author_id\` FOREIGN KEY (\`author_id\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE
    )`;

    await queryRunner.query(createQuery);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const dropQuery = `DROP TABLE "post";`;
    await queryRunner.query(dropQuery);
  }
}
