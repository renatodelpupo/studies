// Functors are containers that can be used with 'map' function.

// Arrays are functors example
const numbers = [1, 2, 3, 4, 5, 6, 7]
const newNumbers = numbers.map((n) => n + 10).map((n) => n * 2)
console.log(numbers, newNumbers)

// Creating...
function SafeType(value) {
  return {
    value,
    isInvalid() {
      return this.value === null || this.value === undefined
    },
    map(fn) {
      if (this.isInvalid()) {
        return SafeType(null)
      } else {
        const newValue = fn(this.value)
        return SafeType(newValue)
      }
    },
  }
}

const original = 'This is a text'
const changed = SafeType(original)
  .map((t) => t.toUpperCase())
  .map((t) => `${t}!!`)

console.log(`Original: ${original}`)
console.log(`Changed: ${changed.value}`)
