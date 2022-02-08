import { BooksModule } from './generated/module-types'
import { booksInjectionToken } from './data'
import { authorsInjectionToken } from '../authors/data'

const resolvers: BooksModule.Resolvers = {
  Query: {
    book(_parent, { id }, { injector }) {
      return injector.get(booksInjectionToken).getById(id)
    },

    books(_parent, { sortBy, sortDirection }, { injector }) {
      return injector
        .get(booksInjectionToken)
        .getAll({ order: sortBy ? { [sortBy]: sortDirection } : undefined })
    },
  },

  Book: {
    author(book, _args, { injector }) {
      return injector.get(authorsInjectionToken).getById(book.authorId)
    },
  },
}

export default resolvers
