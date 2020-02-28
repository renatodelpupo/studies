const api = require('../api')

module.exports = (app) => {
  app.route('/negotiations/week').get(api.weekList)
  app.route('/negotiations/previous').get(api.previousList)
  app.route('/negotiations/old').get(api.oldList)
  app.route('/negotiations').post(api.addNegotiation)
}