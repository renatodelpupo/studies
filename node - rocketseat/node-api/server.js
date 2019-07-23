const express = require('express')

const app = express()

// app.get = toda vez que o usuário acessar a rota
// o parâmetro req simboliza a requisição ao servidor
// o res é a resposta para a requisição
app.get('/', (req, res) => {
    res.send('Hello Rocket')
})

app.listen(3001)
