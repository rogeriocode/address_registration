module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
  },
};
