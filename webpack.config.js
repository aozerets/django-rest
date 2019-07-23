const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './frontend/index.js',
  output: {
    path: path.resolve(__dirname, 'output'),
    filename: 'bundle.min.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-env']
        }
      }
    },{
      test: /\.s[a,c]ss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader'],
        publicPath: "../share"
      })
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less', 'sass', 'scss']
  },
  devtool: 'inline-source-map',
  devServer: {
    port: '3001',
    host: '0.0.0.0',
    proxy: {
      '/signup/': 'http://localhost:8000',
      '/rest-auth/': 'http://localhost:8000',
      '/rest-auth/registration/': 'http://localhost:8000',
      '/api/v1/programs/': 'http://localhost:8000',
    }
  },
  plugins: [
    new ExtractTextPlugin('index.css'),
    new HtmlWebpackPlugin({
      template: 'frontend/app.html'
    })
  ]
};