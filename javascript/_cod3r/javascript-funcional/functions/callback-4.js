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

const hasItems = (item) => item.quantity > 0
const validCart = cart.filter(hasItems)

console.log(validCart)
