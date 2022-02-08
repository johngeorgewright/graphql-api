import 'reflect-metadata'
import 'graphql-import-node'
import { ApolloServer } from 'apollo-server'
import application from './application'
;(async () => {
  new ApolloServer({
    schema: (await application()).createSchemaForApollo(),
  })
    .listen()
    .then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`)
    }, console.error)
})()
