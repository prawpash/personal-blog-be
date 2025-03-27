import { MigrationInterface, QueryRunner } from 'typeorm';

export class Category1743043644684 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const createQuery = `CREATE TABLE "category" (
      "id" INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      "name" VARCHAR(255) NOT NULL UNIQUE,
      "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
	  )`;
    await queryRunner.query(createQuery);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const dropQuery = `DROP TABLE "category"`;
    await queryRunner.query(dropQuery);
  }
}
