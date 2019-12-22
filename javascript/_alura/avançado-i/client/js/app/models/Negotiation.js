class Negotiation {

  constructor(amount, date, price) {
    this._amount = amount
    this._date = date
    this._price = price

    Object.freeze(this)
  }

  get amount() {
    return this._amount
  }

  get date() {
    return new Date(this._date.getTime())
  }

  get price() {
    return this._price
  }

  get subtotal() {
    return this._amount * this._price
  }

}