import { testkit } from 'graphql-modules'
import application from '../src/application'
import authorsModule from '../src/modules/authors'

test('ing', async () => {
  const app = testkit
    .mockApplication(await application())
    .replaceModule(testkit.mockModule(authorsModule, {}))

  expect(app.schema.getQueryType()).toBeDefined()
})
