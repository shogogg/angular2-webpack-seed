var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var root = path.dirname(__dirname);

module.exports = {
  debug: false,
  entry: {
    main: path.join(root, 'src', 'app', 'main.ts'),
    vendor: path.join(root, 'src', 'app', 'vendor.ts')
  },
  output: {
    path: path.join(root, 'dist'),
    filename: path.join('app', '[name].bundle.js'),
    sourceMapFilename: '[file].map'
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      {test: /\.html$/, loader: 'html'},
      {test: /\.json$/, loader: 'json'},
      {test: /\.styl$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap!stylus')},
      {test: /\.ts$/, loader: 'awesome-typescript-loader'}
    ],
    noParse: [
      path.join(root, 'node_modules', 'angular2', 'bundles')
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin('vendor', path.join('app', 'vendor.bundle.js')),
    new ExtractTextPlugin(path.join('app', 'main.bundle.css')),
    new HtmlWebpackPlugin({
      template: path.join(root, 'src', 'index.ejs'),
      inject: 'body',
      minify: {
        collapseWhitespace: true
      },
      title: 'Angular 2 + webpack seed',
      base: '/',
      lang: 'ja'
    })
  ]
};
