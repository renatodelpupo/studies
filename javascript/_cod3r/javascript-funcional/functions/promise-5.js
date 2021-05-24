const maybe = (chance) => {
  return new Promise((resolve, reject) => {
    try {
      // con.log('temp')

      if (Math.random() <= chance) {
        resolve(`Worked!`)
      } else {
        reject(`Didn't work`)
      }
    } catch (e) {
      reject(e)
    }
  })
}

maybe(0)
  .then((data) => console.log(data))
  .catch((err) => console.log(`General catch: ${err}`))

maybe(0)
  .then(
    (data) => console.log(data),
    (err) => console.log(`Inner catch: ${err}`)
  )
  .catch((err) => console.log(`General catch: ${err}`))
