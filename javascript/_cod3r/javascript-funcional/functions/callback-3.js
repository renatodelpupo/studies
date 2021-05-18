const cart = [
  {
    name: 'Notebook',
    price: 27.1,
    quantity: 4,
  },
  {
    name: 'Pen',
    price: 7.99,
    quantity: 10,
  },
  {
    name: 'Pencil',
    price: 5.82,
    quantity: 3,
  },
  {
    name: 'Printer',
    price: 649.5,
    quantity: 0,
  },
  {
    name: 'Scissor',
    price: 19.2,
    quantity: 1,
  },
]

const cartItems = cart.map((item) => item.name)
console.log(cartItems)

const cartPrices = cart.map((item) => item.quantity * item.price)
console.log(cartPrices)
