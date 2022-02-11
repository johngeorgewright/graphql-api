import { BooksModule } from './generated/module-types'
import { BOOKS } from './data'
import { AUTHORS } from '../authors/data'

const resolvers: BooksModule.Resolvers = {
  Query: {
    book(_parent, { id }, { injector }) {
      return injector.get(BOOKS).getById(id)
    },

    books(_parent, { sortBy, sortDirection }, { injector }) {
      return injector
        .get(BOOKS)
        .getAll({ order: sortBy ? { [sortBy]: sortDirection } : undefined })
    },
  },

  Book: {
    author(book, _args, { injector }) {
      return injector.get(AUTHORS).getById(book.authorId)
    },
  },
}

export default resolvers
