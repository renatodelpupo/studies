const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const variables = require('./variables.js');

const dados = [
  {
    nome: 'Renato',
    cidade: 'Vitória'
  },
  {
    nome: 'Marina',
    cidade: 'Cariacica'
  }
]

let plugins = []

dados.forEach(item => {
  plugins.push(new HtmlWebpackPlugin({
    template: 'index.html',
    filename: `${item.nome}.html`,
    title: item.nome,
    cidade: item.cidade,
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