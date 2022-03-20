import { createModule } from 'graphql-modules'
import * as TypeDefs from './authors.graphql'
import resolvers from './resolvers'

const authorsModule = createModule({
  dirname: __dirname,
  id: 'authors',
  resolvers,
  typeDefs: [TypeDefs],
})

export default authorsModule
