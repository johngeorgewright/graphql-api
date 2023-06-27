import { InjectionToken, Provider, Scope } from 'graphql-modules'
import { DataSource } from 'typeorm'
import { dataSource } from '../dataSources/default'

export const DATA_SOURCE = new InjectionToken<DataSource>('data-source')

export async function dataSourceProvider(): Promise<Provider<DataSource>> {
  await dataSource.initialize()
  return {
    global: true,
    scope: Scope.Singleton,
    provide: DATA_SOURCE,
    useFactory: () => dataSource,
  }
}
