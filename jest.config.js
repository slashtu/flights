module.exports = {
  roots: ['<rootDir>/src/'],
  setupFilesAfterEnv: ['./setupTest.js'],
  collectCoverageFrom: [
    'src/components/**/*.js',
    'src/reducers/**/*.js',
    'src/selectors/**/*.js'
  ],

  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy'
  },

  transform: {
    '^.+\\.js$': 'babel-jest'
  },

  snapshotSerializers: ['enzyme-to-json/serializer']
};
