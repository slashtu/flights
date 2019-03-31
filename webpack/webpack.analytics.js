const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const config = require('./webpack.client.prod.js');

module.exports = merge(config, {
  plugins: [new BundleAnalyzerPlugin()]
});
