import { InjectionToken, Provider } from 'graphql-modules'
import { Connection, createConnection, getConnection } from 'typeorm'

export const connectionInjectionToken = new InjectionToken<Connection>(
  'db-connection'
)

export async function connectionProvider(): Promise<Provider<Connection>> {
  await createConnection()
  return {
    global: true,
    provide: connectionInjectionToken,
    useFactory: getConnection,
  }
}
