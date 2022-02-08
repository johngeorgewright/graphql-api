import 'reflect-metadata'
import 'graphql-import-node'
import { ApolloServer } from 'apollo-server'
import { connectionProvider } from './providers/db'
import { createApplication } from 'graphql-modules'
import authorsModule from './modules/authors'
import booksModule from './modules/books'
;(async () => {
  const application = createApplication({
    modules: [authorsModule, booksModule],
    providers: [await connectionProvider()],
  })

  new ApolloServer({
    schema: application.createSchemaForApollo(),
  })
    .listen()
    .then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`)
    }, console.error)
})()
