import { createModule } from 'graphql-modules'
import { authorsProvider } from '../authors/data'
import * as BooksTypeDefs from './books.graphql'
import { booksProvider } from './data'
import resolvers from './resolvers'

const booksModule = createModule({
  dirname: __dirname,
  id: 'books',
  providers: [authorsProvider, booksProvider],
  resolvers,
  typeDefs: [BooksTypeDefs],
})

export default booksModule
