import {MigrationInterface, QueryRunner} from "typeorm";

export class myMigration1704330101229 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(
            `CREATE TABLE "user" (
                "id" SERIAL PRIMARY KEY,
                "username" character varying NOT NULL,
                "email" character varying NOT NULL
            )`
        );

        await queryRunner.query(
            `INSERT INTO "user" ("name", "email") VALUES ('John Doe', 'john@example.com')`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
