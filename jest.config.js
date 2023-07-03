require('nock').disableNetConnect();

const { compilerOptions } = require('./tsconfig');

module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['js', 'ts'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx|)$': 'ts-jest',
    '^.+\\.mjs$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  verbose: true,
};
