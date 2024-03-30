/* eslint-disable @typescript-eslint/no-var-requires */

process.env.TZ = 'UTC'

import { pathsToModuleNameMapper } from 'ts-jest'

const { compilerOptions } = require('./tsconfig.json')

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  modulePaths: ['.'],
  testPathIgnorePatterns: ['/node_modules/'],
  roots: ['<rootDir>/src'],
  testTimeout: 5000,
  coverageReporters: ['lcov', 'text', 'text-summary'],
  collectCoverageFrom: ['./src/**'],
  clearMocks: true,
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        isolatedModules: false,
      },
    ],
  },
}
