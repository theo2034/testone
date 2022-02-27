// jest.config.js
module.exports = {
  moduleDirectories: [
    'node_modules',
    'test-utils.tsx',
    'utils', // a utility folder
    __dirname, // the root directory
  ],
  preset: 'react-native',
  collectCoverage: true,
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
