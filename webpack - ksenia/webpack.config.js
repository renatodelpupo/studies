const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const variables = require('./variables.js');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'renato.html',
      title: 'Renato',
      bar: 'bar',
      favWord: variables.word
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'marina.html',
      title: 'Marina',
      bar: 'bar',
      favWord: variables.word
    })
  ]
};