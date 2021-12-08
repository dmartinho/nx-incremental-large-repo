const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: [
    ...getJestProjects()
  ],
  transform: {
    '^.+.(ts|mjs|js|html)$': 'jest-preset-angular',
  },
  transformIgnorePatterns: ['node_modules/(?!.*.mjs$)'],
};
