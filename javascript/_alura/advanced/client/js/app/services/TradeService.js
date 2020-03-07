class TradeService {

  constructor() {
    this.http = new HttpService()
  }

  add(trade) {
    return ConnectionFactory
      .getConnection()
      .then(connection => new TradeDao(connection))
      .then(dao => dao.add(trade))
      .then(() => 'Trade successfully added')
      .catch(error => {
        throw new Error("Failed to add trades")
      })
  }

  clean() {
    return ConnectionFactory
      .getConnection()
      .then(connection => new TradeDao(connection))
      .then(dao => dao.eraseAll())
      .then(() => 'Trade successfully cleaned')
      .catch(error => {
        console.log(error)
        throw new Error('Failed to clean trades')
      })
  }

  import(currentList) {
    return this.importWeeklyTrades()
      .then(trades =>
        trades.filter(trade =>
          !currentList.some(previousTrade => trade.isEquals(previousTrade)))
      )
      .catch(error => {
        console.log(error)
        throw new Error("Negotiation could not be imported")
      })
  }

  importWeeklyTrades() {
    return this.http
      .get('trades/week')
      .then(responseText => responseText.map(object => new Trade(object.amount, new Date(object.date), object.price)))
      .catch(error => {
        console.log(error)
        throw new Error('Weekly trades import failed')
      })
  }

  importPreviousTrades() {
    return this.http
      .get('trades/previous')
      .then(responseText => responseText.map(object => new Trade(object.amount, new Date(object.date), object.price)))
      .catch(error => {
        console.log(error)
        throw new Error('Previous trades import failed')
      })
  }

  importOldTrades() {
    return this.http
      .get('trades/old')
      .then(responseText => responseText.map(object => new Trade(object.amount, new Date(object.date), object.price)))
      .catch(error => {
        console.log(error)
        throw new Error('Old trades import failed')
      })
  }

  importAllTrades() {
    return Promise.all([
      this.importWeeklyTrades(),
      this.importPreviousTrades(),
      this.importOldTrades()
    ]).then(period => period.reduce((data, period) => data.concat(period), [])).catch(error => new Error(error))
  }

  list() {
    return ConnectionFactory
      .getConnection()
      .then(connection => new TradeDao(connection))
      .then(dao => dao.listAll())
      .catch(error => {
        console.log(error)
        throw new Error('Failed to get trades')
      })
  }
}