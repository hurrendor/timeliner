const webpackValidator = require('webpack-validator')
const resolve = require('path').resolve

module.exports = () => {
  return webpackValidator({
    context: resolve("js"),
    entry: './Timelineframe.js',
    devtool: 'source-map',
    output: {
      path: resolve('public'),
      filename: 'bundle.js',
      publicPath: '/public/'
    },
    resolve: {
      extensions: ['.js', '.json']
    },
    stats: {
      colors: true,
      reasons: true,
      chunks: false
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015']
          }
        }
      ]
    }
  })
}
