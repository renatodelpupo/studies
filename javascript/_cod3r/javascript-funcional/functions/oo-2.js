class Product {
  constructor(name, price) {
    this._name = name
    this._price = price
  }

  get name() {
    return this._name
  }

  get price() {
    return `US$ ${this._price}`
  }
}

const product1 = new Product('Pen', 10)
console.log(product1.name)
console.log(product1.price)
