import { MigrationInterface, QueryRunner } from 'typeorm';

export class Image1743039380376 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const createQuery = `CREATE TABLE "image" (
      "id" INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      "file_name" TEXT NOT NULL,
      "file_location" TEXT NOT NULL,
      "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );`;
    await queryRunner.query(createQuery);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const dropQuery = `DROP TABLE "image";`;
    await queryRunner.query(dropQuery);
  }
}
