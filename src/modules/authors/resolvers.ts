import { AuthorsModule } from './generated/module-types'
import { authorsInjectionToken } from './data'
import { booksInjectionToken } from '../books/data'

const resolvers: AuthorsModule.Resolvers = {
  Query: {
    author(_parent, { id }, { injector }) {
      return injector.get(authorsInjectionToken).getById(id)
    },

    authors(_parent, { sortBy, sortDirection }, { injector }) {
      return injector
        .get(authorsInjectionToken)
        .getAll({ order: sortBy ? { [sortBy]: sortDirection } : undefined })
    },
  },

  Author: {
    books(author, { sortBy, sortDirection }, { injector }) {
      return injector.get(booksInjectionToken).getAll({
        order: sortBy ? { [sortBy]: sortDirection } : undefined,
        where: {
          authorId: author.id,
        },
      })
    },
  },
}

export default resolvers
