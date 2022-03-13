import { testkit } from 'graphql-modules'
import application from '../src/application'
import authorsModule from '../src/modules/authors'
import { connectionProvider } from '../src/providers/db'

test('ing', async () => {
  const app = testkit.mockApplication(await application()).replaceModule(
    testkit.mockModule(authorsModule, {
      providers: [await connectionProvider('test')],
    })
  )

  expect(app.schema.getQueryType()).toBeDefined()
})
