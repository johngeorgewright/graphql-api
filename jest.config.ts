import { Config } from '@jest/types'

const config: Config.InitialOptions = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  preset: 'ts-jest',
  rootDir: 'test',
  setupFilesAfterEnv: ['reflect-metadata'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.graphql$': 'graphql-import-node/jest',
  },
}

export default config
