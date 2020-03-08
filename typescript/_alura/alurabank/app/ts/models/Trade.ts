class Trade {

  private _amount
  private _date
  private _price

  constructor(amount, date, price) {
    this._amount = amount
    this._date = date
    this._price = price
  }

  get amount() {
    return this._amount
  }

  get date() {
    return this._date
  }

  get price() {
    return this._price
  }

  get subtotal() {
    return this._amount * this._price
  }
}