module.exports = function(config) {
  config.set({
    basePath: './test',
    files: ['*.js'],
    browsers: ['Chrome'],
    frameworks: ['mocha'],
  })
}
