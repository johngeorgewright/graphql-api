import DataLoader from 'dataloader'
import { InjectionToken, Provider } from 'graphql-modules'
import { Connection, EntityTarget, FindManyOptions } from 'typeorm'
import { connectionInjectionToken } from './db'
import { Scalars } from '../generated/schema-types'

export interface Data<Entity extends { id: string }> {
  getAll(options?: FindManyOptions<Entity>): Promise<Entity[]>
  getById(id: Scalars['ID']): Promise<Entity>
}

export default function dataProvider<Entity extends { id: string }>(
  injectionToken: InjectionToken<Data<Entity>>,
  Entity: EntityTarget<Entity>
): Provider<Data<Entity>> {
  return {
    provide: injectionToken,
    deps: [connectionInjectionToken],
    useFactory(connection: Connection) {
      const dataLoader = new DataLoader<string, Entity>(async (ids) =>
        connection.manager.findByIds(Entity, ids as string[])
      )

      return {
        async getAll(options: FindManyOptions<Entity> = {}) {
          const books = await connection.manager.find(Entity, options)
          for (const book of books) dataLoader.prime(book.id, book)
          return books
        },

        async getById(id: Scalars['ID']) {
          const result = await dataLoader.load(id)
          if (!result) throw new Error(`No result with id ${id}`)
          return result
        },
      }
    },
  }
}
