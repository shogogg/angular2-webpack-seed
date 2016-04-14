var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var root = path.dirname(__dirname);

module.exports = {
  debug: false,
  entry: {
    app: path.join(root, 'src', 'app', 'app.ts'),
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
      {test: /\.ts$/, loader: 'awesome-typescript-loader'},
      // Stylesheet for component.
      {test: /\.component\.styl$/, loaders: ['to-string' , 'css?minimize', 'stylus']},
      // Global stylesheet.
      {test: /global\.styl$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap!stylus', {publicPath: '../'})},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap', {publicPath: '../'})},
      // Images.
      {test: /\.(png|gif|jpeg?)$/i, loader: 'file?name=assets/img-[sha512:hash:8].[ext]'}
    ],
    noParse: [
      path.join(root, 'node_modules', 'angular2', 'bundles')
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin('vendor', path.join('app', 'vendor.bundle.js')),
    new ExtractTextPlugin(path.join('app', 'app.bundle.css')),
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
