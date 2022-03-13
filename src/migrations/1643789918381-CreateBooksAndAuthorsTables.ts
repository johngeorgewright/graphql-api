import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateBooksAndAuthorsTables1643789918381
  implements MigrationInterface
{
  name = 'CreateBooksAndAuthorsTables1643789918381'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'author',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'name',
            type: 'string',
          },
          {
            name: 'email',
            type: 'string',
          },
        ],
      })
    )
    await queryRunner.createTable(
      new Table({
        name: 'book',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'authorId',
            type: 'varcahr',
          },
          {
            name: 'title',
            type: 'varchar',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_author',
            columnNames: ['authorId'],
            onDelete: 'NO ACTION',
            onUpdate: 'NO ACTION',
            referencedTableName: 'author',
            referencedColumnNames: ['id'],
          },
        ],
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('book')
    await queryRunner.dropTable('author')
  }
}
