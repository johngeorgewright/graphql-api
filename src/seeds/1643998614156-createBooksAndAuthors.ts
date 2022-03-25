import { MigrationInterface, QueryRunner } from 'typeorm'
import { Author } from '../entities/Author'
import { Book } from '../entities/Book'

export class CreateBooksAndAuthors1643998614156 implements MigrationInterface {
  name = 'CreateBooksAndAuthors1643998614156'

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

    await connection.manager.insert(Author, [kate, paul])
    await connection.manager.insert(Book, [theAwakening, cityOfGlass])
  }

  public async down({ connection }: QueryRunner) {
    const kate = await connection.manager.findOne(Author, {
      where: { email: 'kate@chopin.com' },
    })
    const paul = await connection.manager.findOne(Author, {
      where: { email: 'paul@auster.com' },
    })
    const theAwakening =
      kate &&
      (await connection.manager.findOne(Book, {
        where: { title: 'The Awakening', author: kate },
      }))
    const cityOfGlass =
      paul &&
      (await connection.manager.findOne(Book, {
        where: { title: 'City of Glass', author: paul },
      }))

    await connection.manager.delete(Book, [theAwakening, cityOfGlass])
    await connection.manager.delete(Author, [kate, paul])
  }
}
