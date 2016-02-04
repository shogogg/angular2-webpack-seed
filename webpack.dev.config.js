var _ = require('lodash');
var common = require('./webpack.common.config');

var config = _.extend({}, common('dev'), {
  debug: true,
  devtool: 'source-map'
});

module.exports = config;
