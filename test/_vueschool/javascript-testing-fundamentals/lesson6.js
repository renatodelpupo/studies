// code
class Session {
  constructor() {
    this.lastUpdate = Date.now()
  }

  touch() {
    this.lastUpdate = Date.now()
  }
}

// test
function spyOn(Object, method) {
  /* ... */
}

const dateSpy = spyOn(Date, 'now')

Date.now()

console.log(dateSpy.called.length > 0)
