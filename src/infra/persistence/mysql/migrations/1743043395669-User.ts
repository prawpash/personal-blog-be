import { MigrationInterface, QueryRunner } from 'typeorm';

export class User1743043395669 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const createQuery = `CREATE TABLE "user" (
        "id" INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        "name" VARCHAR(255) NOT NULL,
        "username" VARCHAR(255) NOT NULL UNIQUE,
        "email" VARCHAR(255) NOT NULL UNIQUE,
        "password" VARCHAR(255) NOT NULL,
        "profile_picture_id" INT NULL,
        "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        CONSTRAINT "FK_user_profile_picture_id" FOREIGN KEY ("profile_picture_id") REFERENCES "image"("id") ON DELETE SET NULL
    );`;

    await queryRunner.query(createQuery);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const dropQuery = `DROP TABLE "user";`;
    await queryRunner.query(dropQuery);
  }
}
