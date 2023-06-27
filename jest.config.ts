import { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['reflect-metadata'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.graphql$': 'graphql-import-node/jest',
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: '<rootDir>/test/tsconfig.json' }],
  },
}

export default config
