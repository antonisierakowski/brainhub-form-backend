module.exports = {
  clearMocks: true,
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  errorOnDeprecated: true,
  testEnvironment: 'node',
  testMatch: [
    '**/src/**/*.spec.ts',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
};
