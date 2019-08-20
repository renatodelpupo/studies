const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let plugins = []

const data = require('./wineanos.json')

data.forEach(item => {

  plugins.push(new HtmlWebpackPlugin({
    hash: true,
    minify: {
      html5: true,
      collapseWhitespace: true,
      removeComments: true
    },
    template: './src/index.html',
    filename: `${item.wineano}.html`,
    wName: item.name,
    wArea: item.area,
    wCode: `<img class="qrcode-image" src="../qrcodes/${item.wineano}.svg" alt="">`
  }))
})

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: plugins
}