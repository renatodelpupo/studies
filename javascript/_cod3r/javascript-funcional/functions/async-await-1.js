const waitFor = (message) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(console.log(message)), 2000)
  })
}

const myAsync = async () => {
  console.log('Start async')

  await waitFor('Async timeout')

  console.log('End async')
}

const mySync = () => {
  console.log('Start sync')

  waitFor('Sync timeout')

  console.log('End sync')
}

myAsync()
mySync()
/*
 * Start async
 * Start sync
 * End sync
 * Async timeout
 * End async
 * Sync timeout
 */

mySync()
myAsync()
/*
 * Start sync
 * End sync
 * Start async
 * Sync timeout
 * Async timeout
 * End async
 */
