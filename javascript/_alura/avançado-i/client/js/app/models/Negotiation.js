class Negotiation {

  constructor(amount, price) {
    this._date = new Date()
    this._amount = amount
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