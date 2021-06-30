const { Observable } = require('rxjs')

const promise = new Promise((resolve) => {
  resolve('Promise is really cool!')
})

promise.then(console.log)

const obs = new Observable((subscriber) => {
  subscriber.next('Observer')
  subscriber.next('is')
  subscriber.next('really')
  setTimeout(() => {
    subscriber.next('cool!')
    subscriber.complete()
  }, 500)
})

obs.subscribe(console.log)
