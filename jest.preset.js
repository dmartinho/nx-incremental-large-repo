const nxPreset = require('@nrwl/jest/preset');
module.exports = {
  ...nxPreset,
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  // transform: {
  //   '^.+\\.(ts|js|html)$': 'ts-jest',
  // },
  globals: {
    'ts-jest': {
      stringifyContentPathRegex: '\\.(html|svg)$',

      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageReporters: ['html'],
  transform: {
    '^.+.(ts|mjs|js|html)$': 'jest-preset-angular',
  },
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  transformIgnorePatterns: ['node_modules/(?!.*.mjs$)'],
};
