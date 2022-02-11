import { Book } from '../../entities/Book'
import dataProvider from '../../providers/data'

export const [BOOKS, booksProvider] = dataProvider(Book)
