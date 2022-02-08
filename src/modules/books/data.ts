import { InjectionToken } from 'graphql-modules'
import { Book } from '../../entities/Book'
import dataProvider, { Data } from '../../providers/data'

export const booksInjectionToken = new InjectionToken<Data<Book>>('books')

export const booksProvider = dataProvider(booksInjectionToken, Book)
