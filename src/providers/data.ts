import DataLoader from 'dataloader'
import { InjectionToken, Provider, Scope } from 'graphql-modules'
import { Connection, EntityTarget, FindManyOptions } from 'typeorm'
import { DB_CONNECTION } from './db'
import { Scalars } from '../generated/schema-types'

export interface Data<Entity extends { id: string }> {
  getAll(options?: FindManyOptions<Entity>): Promise<Entity[]>
  getById(id: Scalars['ID']): Promise<Entity>
}

export default function dataProvider<Entity extends { id: string }>(
  Entity: EntityTarget<Entity>
): [InjectionToken<Data<Entity>>, Provider<Data<Entity>>] {
  const injectionToken = new InjectionToken<Data<Entity>>(getEntityName(Entity))

  return [
    injectionToken,
    {
      global: true,
      provide: injectionToken,
      deps: [DB_CONNECTION],
      scope: Scope.Operation,
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
    },
  ]
}

function getEntityName(Entity: EntityTarget<any>): string {
  return typeof Entity === 'string'
    ? Entity
    : 'options' in Entity
    ? Entity.options.name
    : Entity.name
}
