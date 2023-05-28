import type { Config } from 'jest';

const config: Config = {
  collectCoverage: true,
  collectCoverageFrom: ['./src/**'],
  moduleDirectories: ['node_modules'],
  roots: ['<rootDir>/test'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testMatch: ['**/?(*.)+(spec|test).+(ts|js)'],
  testPathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: ['//node_modules'],
  verbose: true,
};

export default config;
