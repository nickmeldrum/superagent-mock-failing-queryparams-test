const webpackConfig = require('./webpack.test.config')()

module.exports = function(config) {
  config.set({
    basePath: '.',
    files: ['test/*.js'],
    browsers: ['ChromeHeadless'],
    frameworks: ['mocha'],
    preprocessors: {
      'src/*.js': ['webpack'],
      'test/*.js': ['webpack'],
    },
    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve
    },
  })
}
