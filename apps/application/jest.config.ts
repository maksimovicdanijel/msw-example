import type {Config} from 'jest'


const config: Config = {
  setupFilesAfterEnv: ['<rootDir>/test/jest-setup.ts'],
  roots: ['./src'],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  moduleNameMapper: {
    '^@app/(.*)': '<rootDir>/src/$1',
    '.+\\.(css|styl|less|sass|scss|ttf|woff|woff2)$': 'identity-obj-proxy',
    '\\.svg': '<rootDir>/test/__mocks__/svg.js',
    '\\.png': '<rootDir>/test/__mocks__/png.js',
    '\\.jpg': '<rootDir>/test/__mocks__/jpg.js',
  },
}

export default config