const array = [1, 2, 3]

// Native Map
const arrayMappedNatively = array.map((item) => item + 1)

console.log(arrayMappedNatively)

// My Map
const myMap = (array, fn) => {
  const newArray = []

  array.forEach((item) => {
    newArray.push(fn(item))
  })

  return newArray
}

const arrayMappedByMyMap = myMap(array, (item) => item + 1)
console.log(arrayMappedByMyMap)

// My Map Prototype
Array.prototype.myMap = function (fn) {
  const newArray = []

  this.forEach((item, index) => {
    newArray.push(fn(item, index, this))
  })

  return newArray
}

console.log(array.myMap((item) => item + 1))
