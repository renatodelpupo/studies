const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path =  require('path')
const routes = require('../app/routes')

app.set('clientPath', path.join(__dirname, '../..', 'client'))
console.log(app.get('clientPath'))
app.use(express.static(app.get('clientPath')))
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

routes(app)

module.exports = app