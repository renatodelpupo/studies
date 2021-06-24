function rusher(a, b) {
  const end = Date.now() + 1500
  while (Date.now() < end) {}

  const value = Math.pow(a, 3)
  return value + b
}

function lazy(a) {
  const end = Date.now() + 1500
  while (Date.now() < end) {}

  const value = Math.pow(a, 3)
  return function (b) {
    return value + b
  }
}

console.time('#1')
console.log(rusher(3, 100))
console.log(rusher(3, 200))
console.log(rusher(3, 300))
console.timeEnd('#1')

console.time('#2')
const lazyPow3 = lazy(3)
console.log(lazyPow3(100))
console.log(lazyPow3(200))
console.log(lazyPow3(300))
console.timeEnd('#2')

// Output
// #1 Around 4.5s
// #2 Around 1.5s
