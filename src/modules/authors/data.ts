import { Author } from '../../entities/Author'
import dataProvider from '../../providers/data'

export const [AUTHORS, authorsProvider] = dataProvider(Author)
