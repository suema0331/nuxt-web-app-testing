module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  roots: ['<rootDir>/'],
  modulePaths: ['<rootDir>'],
  moduleDirectories: ['node_modules'],
  collectCoverage: true,
  testMatch: ['<rootDir>/test/**/*.spec.ts'],
  collectCoverageFrom: [
    '<rootDir>/test/*.ts',
    '<rootDir>/components/**/**/*.vue',
  ],
  testEnvironment: 'jsdom',
  setupFiles: ['./test/unit/setup.ts'],
}
