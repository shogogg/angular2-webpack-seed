var _ = require('lodash');
var webpack = require('webpack');
var common = require('./webpack.common.config');

var config = _.extend({}, common('prod'), {
  debug: false
});
config.plugins.push(
  new webpack.optimize.UglifyJsPlugin()
);

module.exports = config;
