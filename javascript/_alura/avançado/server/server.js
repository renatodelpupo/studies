const app = require('./config/express')
const http = require('http')

http.createServer(app).listen(3000, function () {
  console.log('Server running on port ' + this.address().port)
})