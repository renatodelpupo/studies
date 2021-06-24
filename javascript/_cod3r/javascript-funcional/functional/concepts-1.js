// First-Class Function
const isBetween = function (min, max) {
  // Currying && Higher-Order Function
  return function handleError(error) {
    // Currying && Higher-Order Function
    return function validateNumber(number) {
      if (number < min || number > max) {
        // Closure
        throw error
      }
    }
  }
}

// Currying && Higher-Order Function
function validation(fn) {
  // Currying && Higher-Order Function
  return function (value) {
    try {
      // Closure
      fn(value)
    } catch (e) {
      return { error: e }
    }
  }
}

const is20Century = isBetween(1901, 2000)
const handle20CenturyError = is20Century('The year is invalid')
const test20Century = validation(handle20CenturyError)

console.log(test20Century(2001))

// Closure
// Function that remember lexical scope even if is executed outside

// Currying
// Chain of functions that accepts just a single argument

// First-Class Function
// Language feature where functions are treated like any other variable

// Higher-Order Function
// Functions with functions as arguments or return
