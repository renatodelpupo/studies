const app = require('./config/express')
const http = require('http')

http.createServer(app).listen(8080, function () {
  console.log('Server running on ' + this.address().port)
})