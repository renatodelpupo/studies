const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// Iniciando o App
const app = express()

// Iniciando o banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true })

// Usando esse pacote, ele requere recursivamente toda a pasta
requireDir('./src/models')

const Product = mongoose.model('Product')

// app.get = toda vez que o usuário acessar a rota
// o parâmetro req simboliza a requisição ao servidor
// o res é a resposta para a requisição
app.get('/', (req, res) => {

    Product.create({
        title: 'React Native',
        description: 'Build native apps with React',
        url: 'http://github.com/facebook/react-native'
    })

    return res.send('Hello Rocket')
})

app.listen(3001)
