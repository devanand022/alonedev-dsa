import type { Config } from 'jest';

const config: Config = {
  rootDir: 'src',
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: '../coverage',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  collectCoverageFrom: ['**/*.ts'],
};

export default config;
