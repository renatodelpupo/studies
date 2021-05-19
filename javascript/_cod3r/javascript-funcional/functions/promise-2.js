setTimeout(function () {
  console.log('Executing simple callback...')

  setTimeout(function () {
    console.log('Executing simple callback...')

    setTimeout(function () {
      console.log('Executing simple callback...')
    }, 2000)
  }, 2000)
}, 2000)

function waitFor(time = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('Executing promise callback...')
      resolve()
    }, time)
  })
}

waitFor()
  .then(() => waitFor())
  .then(waitFor)
