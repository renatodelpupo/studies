const express = require('express')
const routes = express.Router()

const ProductController = require('./controllers/ProductController')

// app.get = toda vez que o usuário acessar a rota
// o parâmetro req simboliza a requisição ao servidor
// o res é a resposta para a requisição
routes.get('/products', ProductController.index)
routes.post('/products', ProductController.store)

module.exports = routes