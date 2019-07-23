const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// Iniciando o App
const app = express()

// Iniciando o banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true })

// Usando esse pacote, ele requere recursivamente toda a pasta
requireDir('./src/models')

// Com isso nada mais funciona na raíz do localhost
// Tudo vai para /api
// .use é qualquer requisição (get, post, etc)
app.use('/api', require('./src/routes'))

app.listen(3001)
