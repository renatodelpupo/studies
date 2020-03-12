export class Trade {

  constructor(readonly amount: number, readonly date: Date, readonly price: number) { }

  get subtotal() {
    return this.amount * this.price
  }
}