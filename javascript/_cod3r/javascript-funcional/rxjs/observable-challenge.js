const { from, noop, Observable } = require('rxjs')

// #1
const between = (min, max) => {
  return new Observable((subscriber) => {
    for (i = min; i <= max; i++) {
      subscriber.next(i)
    }

    subscriber.complete() // Optional
  })
}

between(4, 7).subscribe(
  (num) => console.log(`Number ${num}`),
  noop, // Ignore error handling
  () => console.log('End')
)

// #2
const between2 = (min, max) => {
  const array = Array.from({ length: max - min + 1 }, (_, i) => min + i)
  return new from(array)
}

between2(4, 7).subscribe({
  complete() {
    console.log('End')
  },
  next(num) {
    console.log(`Number ${num}`)
  },
})
