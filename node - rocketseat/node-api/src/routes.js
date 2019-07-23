const express = require('express')
const routes = express.Router()

// app.get = toda vez que o usuário acessar a rota
// o parâmetro req simboliza a requisição ao servidor
// o res é a resposta para a requisição
routes.get('/', (req, res) => {

  // Product.create({
  //     title: 'React Native',
  //     description: 'Build native apps with React',
  //     url: 'http://github.com/facebook/react-native'
  // })

  return res.send('Hello Rocket')
})

module.exports = routes