import { createModule } from 'graphql-modules'
import * as BooksTypeDefs from './books.graphql'
import resolvers from './resolvers'

const booksModule = createModule({
  dirname: __dirname,
  id: 'books',
  resolvers,
  typeDefs: [BooksTypeDefs],
})

export default booksModule
