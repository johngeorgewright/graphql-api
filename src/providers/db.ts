import { InjectionToken, Provider, Scope } from 'graphql-modules'
import { Connection, createConnection, getConnection } from 'typeorm'

export const DB_CONNECTION = new InjectionToken<Connection>('db-connection')

export async function connectionProvider(): Promise<Provider<Connection>> {
  await createConnection()
  return {
    global: true,
    scope: Scope.Singleton,
    provide: DB_CONNECTION,
    useFactory: getConnection,
  }
}
