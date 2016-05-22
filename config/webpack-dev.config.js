var path = require('path')
var precss = require('precss')
var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var BUILD_DIR = path.resolve(__dirname, '../build')
var APP_DIR = path.resolve(__dirname, '../app')

module.exports = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        include: APP_DIR,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        include: APP_DIR,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
      },
      {
        test: /\.js$/,
        include: APP_DIR,
        loader: 'babel'
      },
      {
        test: /\.(jpg|png|gif)$/,
        include: APP_DIR,
        loader: 'url-loader?limit=1024'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.png', '.jpeg', '.css']
  },
  postcss: function() {
    return [precss, autoprefixer]
  },
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true })
  ]
}
