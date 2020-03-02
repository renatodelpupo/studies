class TradeList {

  constructor() {
    this._trades = []
  }

  add(trade) {
    this._trades.push(trade)
  }

  get trades() {
    return [].concat(this._trades)
  }

  _erase() {
    this._trades = []
  }

  get totalLength() {
    return this._trades.reduce((acc, cur) => acc + cur.subtotal, 0)
  }

  order(condition) {
    this._trades.sort(condition)
  }
}