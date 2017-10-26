var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var path = require('path');
var fs = require('fs');

module.exports = {
  entry: './src/index.js',

  devtool: '#cheap-module-source-map',

  output: {
	  path: path.join(__dirname, 'src/built'),
    filename: "[name].js",
    publicPath: '/static/'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },{
		    test: /\.scss$/,
		    loader: ExtractTextPlugin.extract({
			    fallback: "style-loader",
			    use: [
				    "css-loader?modules&importLoaders=1&localIdentName=[hash:base64:7]",
				    'postcss-loader',
				    'sass-loader'
			    ]
		    }),
	    }, {
		    test: /\.css$/,
		    loader: ExtractTextPlugin.extract('css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
	    }, { test: /\.svg$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
    ]
  },

  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
  ]
};
