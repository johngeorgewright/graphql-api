import { InjectionToken, Provider } from 'graphql-modules'
import { Connection, createConnection, getConnection } from 'typeorm'

export const DB_CONNECTION = new InjectionToken<Connection>('db-connection')

export async function connectionProvider(
  _name: string
): Promise<Provider<Connection>> {
  await createConnection()
  return {
    global: true,
    provide: DB_CONNECTION,
    useFactory: getConnection,
  }
}
