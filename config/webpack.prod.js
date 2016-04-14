var webpack = require('webpack');
var merge = require('webpack-merge');
var common = require('./webpack.common.js');

module.exports = merge.smart(common, {
  debug: false,
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
});
