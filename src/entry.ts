import 'reflect-metadata'
import 'graphql-import-node'
import { ApolloServer } from 'apollo-server'
import application from './application'
;(async () => {
  const app = await application()
  new ApolloServer({
    executor: app.createApolloExecutor(),
    schema: app.schema,
  })
    .listen()
    .then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`)
    }, console.error)
})()
