import { createApplication } from 'graphql-modules'
import authorsModule from './modules/authors'
import booksModule from './modules/books'
import { connectionProvider } from './providers/db'

export default async function application(connectionName: string = 'default') {
  return createApplication({
    modules: [authorsModule, booksModule],
    providers: [await connectionProvider(connectionName)],
  })
}
