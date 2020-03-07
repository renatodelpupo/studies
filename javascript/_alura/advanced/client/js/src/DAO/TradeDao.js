import { Trade } from '../models/Trade'

export class TradeDao {

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

  listAll() {
    return new Promise((resolve, reject) => {
      let cursor = this._connection
        .transaction([this._store], 'readwrite')
        .objectStore(this._store)
        .openCursor()

      let trades = []

      cursor.onsuccess = event => {
        let current = event.target.result

        if (current) {
          let data = current.value
          trades.push(new Trade(data._amount, data._date, data._price))
          current.continue()
        } else {
          resolve(trades)
        }
      }

      cursor.onerror = event => {
        console.log(event.target.error)
        reject('Failed to list trades')
      }
    })
  }

  eraseAll() {
    return new Promise((resolve, reject) => {
      let request = this._connection
        .transaction([this._store], 'readwrite')
        .objectStore(this._store)
        .clear()

      request.onsuccess = event => resolve('Trades successfully deleted')

      request.onerror = event => {
        console.log(event.target.error)
        reject('Failed to delete trades')
      }
    })
  }
}