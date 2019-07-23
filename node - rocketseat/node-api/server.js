const express = require('express')
const mongoose = require('mongoose')

// Iniciando o App
const app = express()

// Iniciando o banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true })

// app.get = toda vez que o usuário acessar a rota
// o parâmetro req simboliza a requisição ao servidor
// o res é a resposta para a requisição
app.get('/', (req, res) => {
    res.send('Hello Rocket')
})

app.listen(3001)
