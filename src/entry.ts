import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import 'reflect-metadata'
import 'graphql-import-node'
import application from './application'
;(async () => {
  const app = await application()
  const { url } = await startStandaloneServer(
    new ApolloServer({
      schema: app.schema,
    }),
    {
      listen: { port: 4_000 },
    }
  )
  console.log(`🚀 Server ready at ${url}`)
})()
