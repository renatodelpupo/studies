const firstElement = (data) => data[0]
const lowerCase = (letter) => letter.toLowerCase()

new Promise((resolve) => resolve(['Ana', 'Bea', 'Dan']))
  .then(firstElement)
  .then(firstElement)
  .then(lowerCase)
  .then(console.log)
