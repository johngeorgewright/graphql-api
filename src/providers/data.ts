import DataLoader from 'dataloader'
import { InjectionToken, Provider, Scope } from 'graphql-modules'
import { DataSource, EntityTarget, FindManyOptions } from 'typeorm'
import { DATA_SOURCE } from './db'
import { Scalars } from '../generated/schema-types'

export interface Data<Entity extends { id: string }> {
  getAll(options?: FindManyOptions<Entity>): Promise<Entity[]>
  getById(id: Scalars['ID']['input']): Promise<Entity>
}

export default function dataProvider<Entity extends { id: string }>(
  Entity: EntityTarget<Entity>,
): [InjectionToken<Data<Entity>>, Provider<Data<Entity>>] {
  const injectionToken = new InjectionToken<Data<Entity>>(getEntityName(Entity))

  return [
    injectionToken,
    {
      global: true,
      provide: injectionToken,
      deps: [DATA_SOURCE],
      scope: Scope.Operation,
      useFactory({ manager }: DataSource) {
        const dataLoader = new DataLoader<string, Entity>(async (ids) => {
          const results = await manager.findByIds(Entity, ids as string[])

          if (results.length !== ids.length)
            throw new Error(
              `Cannot find ${getEntityName(
                Entity,
              )} entities with ids (${ids.filter(
                (id) => !results.find((result) => result.id === id),
              )}).`,
            )

          return results
        })

        return {
          async getAll(options: FindManyOptions<Entity> = {}) {
            const entities = await manager.find(Entity, options)
            for (const entity of entities) dataLoader.prime(entity.id, entity)
            return entities
          },

          async getById(id: Scalars['ID']['input']) {
            const result = await dataLoader.load(id)
            if (!result) throw new Error(`No result with id ${id}`)
            return result
          },

          async getByIds(ids: Scalars['ID']['input'][]) {
            return dataLoader.loadMany(ids)
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
