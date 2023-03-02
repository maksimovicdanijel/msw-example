/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  roots: ['./src'],
  testEnvironment: 'jsdom',
}

module.exports = config
