import { MigrationInterface, QueryRunner } from 'typeorm';

export class PostsWithCategories1743048823371 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const createQuery = `CREATE TABLE "posts_with_categories" (
        "post_id" INT NOT NULL,
        "category_id" INT NOT NULL,
        "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY ("post_id", "category_id"),
        CONSTRAINT "FK_categories_post_id" FOREIGN KEY ("post_id") REFERENCES "post"("id") ON DELETE CASCADE,
        CONSTRAINT "FK_posts_category_id" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE CASCADE
    )`;

    await queryRunner.query(createQuery);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const dropQuery = `DROP TABLE "posts_with_categories";`;
    await queryRunner.query(dropQuery);
  }
}
