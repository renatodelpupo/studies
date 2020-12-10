const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

app.engine(
  '.hbs',
  exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
  })
)
app.set('view engine', '.hbs')

// Routing
app.get('/', (req, res) => {
  res.render('index')
})
app.get('/about', (req, res) => {
  res.render('about')
})

const appPort = 8080
app.listen(appPort, () => {
  console.log(`Server is starting at port ${appPort}`)
})
