module.exports = {
  roots: ['<rootDir>/src/'],
  collectCoverageFrom: [
    'src/components/**/*.js',
    'src/reducers/**/*.js',
    'src/selectors/**/*.js'
  ],
  transform: {
    '^.+\\.js$': 'babel-jest'
  }
};
