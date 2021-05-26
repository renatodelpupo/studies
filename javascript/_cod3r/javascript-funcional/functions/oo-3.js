function Product(name, price, discount) {
  this.name = name
  this.price = price
  this._discount = discount || 0

  this.finalPrice = function () {
    return this.price * (1 - this._discount)
  }
}

Product.prototype.log = function () {
  console.log(`${this.name} costs US$ ${this.finalPrice()}`)
}

Object.defineProperty(Product.prototype, 'discount', {
  get: function () {
    return this._discount
  },

  set: function (newDiscount) {
    this._discount = newDiscount
  },
})

Object.defineProperty(Product.prototype, 'discountMessage', {
  get: function () {
    return `Discount of ${this._discount}%`
  },
})

const product = new Product('Laptop', 3000)
product.log()
console.log(product.discount)
console.log(product.discountMessage)
