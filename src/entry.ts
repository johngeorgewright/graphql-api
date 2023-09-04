import { useGraphQLModules } from '@envelop/graphql-modules'
import { createYoga } from 'graphql-yoga'
import { createServer } from 'node:http'
import application from './application'
;(async () => {
  const yoga = createYoga({
    plugins: [useGraphQLModules(await application())],
  })

  const server = createServer(yoga).listen(4_000, () => {
    console.info('Server listening on', server.address())
  })
})()
