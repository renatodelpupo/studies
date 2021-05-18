const array = [1, 2, 3, 4]

const rule = (item) => item >= 3

// Native Filter
const arrayFilteredNatively = array.filter(rule)

console.log(arrayFilteredNatively)

// My Filter
Array.prototype.myFilter = function (fn) {
  const newArray = []

  this.forEach((item, index) => {
    if (fn(item, index, this)) newArray.push(item)
  })

  return newArray
}

console.log(array.myFilter(rule))
