function composition(...fns) {
  return function (value) {
    return fns.reduce((acc, fn) => {
      return fn(acc)
    }, value)
  }
}

const upperCase = (text) => text.toUpperCase()
const emphasis = (text) => `${text}!!`
const slow = (text) => text.split('').join(' ')

const composition1 = composition(upperCase, emphasis)('hey')
console.log(composition1)

const composition2 = composition(upperCase, emphasis, slow)('hey')
console.log(composition2)
