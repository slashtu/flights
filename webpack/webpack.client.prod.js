const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const basic = require('./webpack.basic.js');
const generateScopedName = require('./util/generateScopedName.js');

const getLocalIdent = generateScopedName();

const config = {
  mode: 'production',
  entry: {
    main: ['@babel/polyfill', './src/client']
  },
  output: {
    path: path.join(__dirname, '../dist/client'),
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
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              '@babel/plugin-proposal-class-properties'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              getLocalIdent: (context, localIdentName, localName) =>
                getLocalIdent(localName, context.resourcePath)
            }
          }
        ]
      }
    ]
  },
  devtool: false,
  optimization: {
    minimizer: [new TerserPlugin(), new OptimizeCssAssetsPlugin({})]
  },
  plugins: [
    new webpack.DefinePlugin({
      __SERVER__: JSON.stringify(false),
      __CLIENT__: JSON.stringify(true)
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};

module.exports = merge(config, basic);
