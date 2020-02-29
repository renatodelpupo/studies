const api = require('../api')

module.exports = (app) => {
  app.route('/trades/week').get(api.weekList)
  app.route('/trades/previous').get(api.previousList)
  app.route('/trades/old').get(api.oldList)
  app.route('/trades').post(api.addTrade)
}