function generateNumbers() {
  return {
    start(fn, interval = 1000) {
      let num = 0

      const i = setInterval(() => {
        fn(num++)
      }, interval)

      return {
        stop() {
          clearInterval(i)
        },
      }
    },
  }
}

const temp1 = generateNumbers()
const exec11 = temp1.start((number) => {
  console.log(`#1.1: ${number * 2}`)
})
const exec12 = temp1.start((number) => {
  console.log(`#1.2: ${number * 2}`)
}, 500)

const temp2 = generateNumbers()
const exec2 = temp2.start((a) => {
  console.log(`#2: ${a + 100}`)
}, 2000)

setTimeout(() => {
  exec11.stop()
  exec2.stop()
}, 10000)

setTimeout(() => {
  exec12.stop()
}, 12000)
