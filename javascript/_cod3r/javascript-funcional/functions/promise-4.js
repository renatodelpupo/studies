const generateNumberBetween = (min, max, time) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(parseInt(Math.random() * (max - min + 1) + min)), time)
  })
}

console.time('promise all')

Promise.all([
  generateNumberBetween(0, 9, 4000),
  generateNumberBetween(10, 19, 2000),
  generateNumberBetween(20, 29, 3000),
  generateNumberBetween(30, 39, 5000),
  generateNumberBetween(40, 49, 1000),
])
  .then(console.log)
  .then(() => console.timeEnd('promise all'))
