import { AuthorsModule } from './generated/module-types'
import { AUTHORS } from './data'
import { BOOKS } from '../books/data'

const resolvers: AuthorsModule.Resolvers = {
  Query: {
    author(_parent, { id }, { injector }) {
      return injector.get(AUTHORS).getById(id)
    },

    authors(_parent, { sortBy, sortDirection }, { injector }) {
      return injector
        .get(AUTHORS)
        .getAll({ order: sortBy ? { [sortBy]: sortDirection } : undefined })
    },
  },

  Author: {
    books(author, { sortBy, sortDirection }, { injector }) {
      return injector.get(BOOKS).getAll({
        order: sortBy ? { [sortBy]: sortDirection } : undefined,
        where: {
          authorId: author.id,
        },
      })
    },
  },
}

export default resolvers
