var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env) {
  return {
    debug: env !== 'prod',
    entry: {
      main: abspath('src', 'app', 'main.ts'),
      vendor: abspath('src', 'app', 'vendor.ts')
    },
    output: {
      path: abspath('dist'),
      filename: path.join('app', '[name].bundle.js'),
      sourceMapFilename: '[file].map'
    },
    resolve: {
      extensions: ['', '.ts', '.js']
    },
    module: {
      loaders: [
        {test: /\.html$/, loader: 'html'},
        {test: /\.jade$/, loader: 'html!jade?+static'},
        {test: /\.json$/, loader: 'json'},
        {test: /\.styl$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap!stylus')},
        {test: /\.ts$/, loader: 'ts'}
      ],
      noParse: [
        path.join(__dirname, 'node_modules', 'angular2', 'bundles')
      ]
    },
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(true),
      new webpack.optimize.CommonsChunkPlugin('vendor', path.join('app', 'vendor.bundle.js')),
      new ExtractTextPlugin(path.join('app', 'main.bundle.css')),
      new HtmlWebpackPlugin({
        template: abspath('src', 'index.jade'),
        inject: 'body'
      })
    ]
  }
};

function abspath() {
  var args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}
