export class Trade {

  constructor(private _amount: number, private _date: Date, private _price: number) { }

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