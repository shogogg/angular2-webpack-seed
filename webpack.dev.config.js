var merge = require('webpack-merge');
var common = require('./webpack.common.config');

module.exports = merge.smart(common, {
  debug: true,
  devtool: 'source-map'
});
