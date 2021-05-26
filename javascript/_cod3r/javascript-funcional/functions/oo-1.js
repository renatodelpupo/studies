function Product(name, price, discount = 0) {
  this.name = name
  this.price = price
  this.discount = discount

  this.finalPrice = function () {
    return this.price * (1 - this.discount)
  }
}

const product1 = new Product('Pen', 10)
console.log(product1.name)

const product2 = new Product('Laptop', 2000, 0.5)
console.log(product2.price)
console.log(product2.finalPrice())
