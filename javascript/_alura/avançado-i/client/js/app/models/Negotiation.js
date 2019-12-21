class Negotiation {

  constructor(amount, price) {
    this.date = new Date()
    this.amount = amount
    this.price = price
  }

  getSubtotal = () => this.amount * this.price

}