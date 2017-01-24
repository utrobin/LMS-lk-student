var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var path = require('path');
var fs = require('fs');

module.exports = {
  entry: './src/index.js',


  devtool: 'cheap-module-eval-source-map',

  output: {
    path: "./src/built",
    filename: "[name].js",
    publicPath: '/static/'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        plugins: ['transform-runtime'],
        loader: 'babel-loader',
        query: {presets: ['es2015', 'react', 'stage-2']}
      },
      { test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
        )
      },
      { test: /\.svg$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
    ]
  },

  postcss: [
    require('autoprefixer-core'),
    require('postcss-color-rebeccapurple')
  ],

  resolve: {
    modulesDirectories: ['node_modules', 'components'],
  },

  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
  ]
};
