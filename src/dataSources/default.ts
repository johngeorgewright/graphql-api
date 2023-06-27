import * as path from 'node:path'
import { DataSource } from 'typeorm'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: process.env.TYPEORM_DATABASE || 'db.sqlite',
  dropSchema: process.env.TYPEORM_DROP_SCHEMA === 'true',
  entities: [path.resolve(__dirname, '..', 'entities', '*{.js,.ts}')],
  logging: true,
  migrations: [path.resolve(__dirname, '..', 'migrations', '*{.js,.ts}')],
  migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN === 'true',
})
