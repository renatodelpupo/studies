function isPromise(fn) {
  return Promise.resolve(fn) === fn
}

function composition(...fns) {
  return function (value) {
    return fns.reduce(async (acc, fn) => {
      if (isPromise(acc)) {
        return fn(await acc)
      } else {
        return fn(acc)
      }
    }, value)
  }
}

const upperCase = (text) => text.toUpperCase()
const emphasis = (text) => `${text}!!`
const slow = (text) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(text.split('').join(' '))
    }, 3000)
  })
}

composition(upperCase, emphasis)('hey').then(console.log)
composition(upperCase, emphasis, slow)('hey').then(console.log)

module.exports = { composition }
