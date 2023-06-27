import { createApplication } from 'graphql-modules'
import authorsModule from './modules/authors'
import { authorsProvider } from './modules/authors/data'
import booksModule from './modules/books'
import { booksProvider } from './modules/books/data'
import { dataSourceProvider } from './providers/db'

export default async function application() {
  return createApplication({
    modules: [authorsModule, booksModule],
    providers: [await dataSourceProvider(), authorsProvider, booksProvider],
  })
}
