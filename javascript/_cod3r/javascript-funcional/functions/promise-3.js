const generateNumberBetween = (min, max) => {
  if (min > max) [max, min] = [min, max]

  return parseInt(Math.random() * (max - min + 1) + min)
}

new Promise((resolve) => {
  resolve(generateNumberBetween(1, 10))
})
  .then((n) => n * 10)
  .then((n10) => `Generated number ${n10}`)
  .then(console.log)
