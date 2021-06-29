const { interval } = require('rxjs')

const generateNumbers = interval(500)

const sub1 = generateNumbers.subscribe((number) => {
  console.log(`Sub #1: ${Math.pow(2, number)}`)
})

const sub2 = generateNumbers.subscribe((number) => console.log(`Sub #2: ${number}`))

setTimeout(() => sub1.unsubscribe(), 8000)
setTimeout(() => sub2.unsubscribe(), 6000)
