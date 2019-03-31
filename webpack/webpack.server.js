const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const basic = require('./webpack.basic.js');

const config = {
  mode: 'development',
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    server: './src/server/hot'
  },
  output: {
    path: path.join(__dirname, '../dist/server'),
    filename: '[name].js',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      __SERVER__: JSON.stringify(true),
      __CLIENT__: JSON.stringify(false)
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
};

module.exports = merge(basic, config);
