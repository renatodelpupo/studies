const { Observable } = require('rxjs')

const obs = Observable.create((subscriber) => {
  subscriber.next('RxJS is really powerful')

  if (Math.random() > 0.5) {
    subscriber.complete()
  } else {
    subscriber.error('A problem occurred')
  }
})

// Standard parameters order
obs.subscribe(
  (nextValue) => console.log(`Next: ${nextValue}`),
  (errorMessage) => console.log(`Error: ${errorMessage}`),
  () => console.log('End')
)

// Named parameters
obs.subscribe({
  complete() {
    console.log('End')
  },
  error(message) {
    console.log(`Error: ${message}`)
  },
  next(value) {
    console.log(`Next: ${value}`)
  },
})
