module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/config/fileMock.js',
    '\\.(css|less|sass|scss)$': '<rootDir>/src/config/styleMock.js'
  },
  setupFiles: ['<rootDir>/.jest/root-setup.js']
};
