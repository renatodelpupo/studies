function generateElements(array) {
  return {
    start(fn) {
      let index = 0

      const i = setInterval(() => {
        if (index >= array.length) {
          clearInterval(i)
        } else {
          fn(array[index])
          index++
        }
      }, 1000)

      return {
        stop() {
          clearInterval(i)
        },
      }
    },
  }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const temp1 = generateElements(numbers)

const exec1 = temp1.start((number) => {
  console.log(Math.pow(2, number))
})

setTimeout(() => {
  exec1.stop()
}, 5000)

generateElements(['Matt', 'Mike', 'Jordi']).start(console.log)
