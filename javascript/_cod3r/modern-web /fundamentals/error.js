function handleError(error) {
  // console error instead of throw new Error
  console.error(`An error occurred: ${error.message}`)
}

function print(object) {
  try {
    console.log(object.string)
  } catch (e) {
    handleError(e)
  } finally {
    console.log('Function end')
  }
}

const object = { number: 7 }
print()
