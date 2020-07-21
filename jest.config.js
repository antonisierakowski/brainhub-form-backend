module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  setupFiles: ['./src/config/container.ts'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  errorOnDeprecated: true,
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
