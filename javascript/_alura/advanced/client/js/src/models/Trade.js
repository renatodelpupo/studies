class Trade {

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

  isEquals(objectToCompare) {
    // Total criteria
    // return JSON.stringify(this) == JSON.stringify(objectToCompare)

    // Specific criteria
    return (
      this._date.getTime() == objectToCompare._date.getTime() &&
      this._price == objectToCompare._price
    )
  }
}