import { createModule } from 'graphql-modules'
import { booksProvider } from '../books/data'
import * as TypeDefs from './authors.graphql'
import { authorsProvider } from './data'
import resolvers from './resolvers'

const authorsModule = createModule({
  dirname: __dirname,
  id: 'authors',
  providers: [authorsProvider, booksProvider],
  resolvers,
  typeDefs: [TypeDefs],
})

export default authorsModule
