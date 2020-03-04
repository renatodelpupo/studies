class TradeDao {

  constructor(connection) {
    this._connection = connection
    this._store = 'trades'
  }

  add(trade) {
    return new Promise((resolve, reject) => {
      let request = this._connection
        .transaction([this._store], 'readwrite')
        .objectStore(this._store)
        .add(trade)

      request.onsuccess = event => {
        resolve()
      }

      request.onerror = event => {
        console.log(event.target.error)
        reject('Negotiation could not be added')
      }
    })
  }
}