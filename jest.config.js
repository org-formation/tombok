module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      ignoreCoverageForAllDecorators: true,
    },
  },
  testRegex: '\\.test.ts$',
  coverageDirectory: 'reports/coverage',
  coverageReporters: ['json', 'lcov', 'text']
};
