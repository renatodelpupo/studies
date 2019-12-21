class Negotiation {

  constructor(amount, price) {
    this._date = new Date()
    this._amount = amount
    this._price = price
  }

  getAmount = () => this._amount
  getDate = () => this._date
  getPrice = () => this._price
  getSubtotal = () => this._amount * this._price

}