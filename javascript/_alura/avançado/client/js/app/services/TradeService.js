class TradeService {

  constructor() {
    this.http = new HttpService()
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
}