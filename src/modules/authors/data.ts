import { InjectionToken } from 'graphql-modules'
import { Author } from '../../entities/Author'
import dataProvider, { Data } from '../../providers/data'

export const authorsInjectionToken = new InjectionToken<Data<Author>>('authors')

export const authorsProvider = dataProvider(authorsInjectionToken, Author)
