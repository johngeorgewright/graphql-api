import { MigrationInterface, QueryRunner } from 'typeorm'
import { Author } from '../entities/Author'
import { Book } from '../entities/Book'

export class createBooksAndAuthors1643998614156 implements MigrationInterface {
  name = 'createBooksAndAuthors1643998614156'

  public async up({ connection }: QueryRunner) {
    const kate = new Author()
    kate.email = 'kate@chopin.com'
    kate.name = 'Kate Chopin'

    const paul = new Author()
    paul.email = 'paul@auster.com'
    paul.name = 'Paul Auster'

    const theAwakening = new Book()
    theAwakening.title = 'The Awakening'
    theAwakening.author = kate

    const cityOfGlass = new Book()
    cityOfGlass.title = 'City of Glass'
    cityOfGlass.author = paul

    await connection.manager.insert(Author, kate)
    await connection.manager.insert(Author, paul)
    await connection.manager.insert(Book, theAwakening)
    await connection.manager.insert(Book, cityOfGlass)
  }

  public async down({ connection }: QueryRunner) {
    await connection.manager.delete(Book, {})
    await connection.manager.delete(Author, {})
  }
}
