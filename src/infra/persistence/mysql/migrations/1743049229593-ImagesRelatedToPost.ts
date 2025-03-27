import { MigrationInterface, QueryRunner } from 'typeorm';

export class ImagesRelatedToPost1743049229593 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const createQuery = `CREATE TABLE "images_related_to_post" (
        "post_id" int NOT NULL,
        "image_id" int NOT NULL,
        PRIMARY KEY ("post_id", "image_id"),
        CONSTRAINT "FK_images_post_id" FOREIGN KEY ("post_id") REFERENCES "post" ("id") ON DELETE CASCADE,
        CONSTRAINT "FK_post_image_id" FOREIGN KEY ("image_id") REFERENCES "image" ("id") ON DELETE CASCADE
    )`;

    await queryRunner.query(createQuery);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const dropQuery = `DROP TABLE "images_related_to_post"`;
    await queryRunner.query(dropQuery);
  }
}
