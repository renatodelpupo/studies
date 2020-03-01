class TradeService {

  constructor() {
    this.http = new HttpService()
  }

  importWeeklyTrades() {

    return new Promise((resolve, reject) => {
      this.http
        .get('trades/week')
        .then(responseText => {
          const trades = responseText.map(object => new Trade(object.amount, new Date(object.date), object.price))
          resolve(trades)
        })
        .catch(error => {
          console.log(error)
          reject('Weekly trades import failed')
        })
    })
  }

  importPreviousTrades() {

    return new Promise((resolve, reject) => {
      this.http
        .get('trades/previous')
        .then(responseText => {
          const trades = responseText.map(object => new Trade(object.amount, new Date(object.date), object.price))
          resolve(trades)
        })
        .catch(error => {
          console.log(error)
          reject('Previous trades import failed')
        })
    })
  }

  importOldTrades() {

    return new Promise((resolve, reject) => {
      this.http
        .get('trades/old')
        .then(responseText => {
          const trades = responseText.map(object => new Trade(object.amount, new Date(object.date), object.price))
          resolve(trades)
        })
        .catch(error => {
          console.log(error)
          reject('Old trades import failed')
        })
    })
  }
}