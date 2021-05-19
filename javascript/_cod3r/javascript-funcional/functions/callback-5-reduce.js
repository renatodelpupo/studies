const array = [1, 2, 3, 4]

const sum = (a, b) => a + b

// Native Reduce
console.log(array.reduce(sum))
console.log(array.reduce(sum, 2))

// My Reduce
Array.prototype.myReduce = function (fn, acc) {
  let accumulator = acc || null

  this.forEach((currentItem, index) => {
    accumulator = fn(accumulator, currentItem, index, this)
  })

  return accumulator
}

console.log(array.myReduce(sum))
console.log(array.myReduce(sum, 2))
