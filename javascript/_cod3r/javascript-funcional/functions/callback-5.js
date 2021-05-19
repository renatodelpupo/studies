const cart = [
  {
    name: 'Pen',
    price: 7.99,
    quantity: 10,
  },
  {
    name: 'Printer',
    price: 649.5,
    quantity: 1,
  },
  {
    name: 'Scissor',
    price: 19.2,
    quantity: 1,
  },
]

const cartAverage = cart.reduce(
  (acc, curr) => {
    const quantity = curr.quantity + acc.quantity
    const subtotal = curr.quantity * curr.price + acc.subtotal
    const average = subtotal / quantity

    return { average, quantity, subtotal }
  },
  {
    average: 0,
    quantity: 0,
    subtotal: 0,
  }
).average

console.log(`Average: ${cartAverage.toFixed(2)}`)
