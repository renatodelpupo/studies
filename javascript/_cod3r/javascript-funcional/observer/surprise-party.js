const readline = require('readline')

const getAnswer = (question) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer)
      rl.close()
    })
  })
}

// Observer
const girlfriend = (event) => {
  if (event.person === 'Matt') {
    console.log('Surprise!!')
  }
}

// Observer
const manager = (event) => {
  console.log(`You have to pay the taxes, ${event.person}`)
}

// Subject
const doorman = async (observers) => {
  while (true) {
    const person = await getAnswer('Who arrived? ')

    if (person === 'quit') {
      break
    } else {
      observers?.forEach((obs) => obs({ person }))
    }
  }
}

// Observers registration
doorman([manager, girlfriend])
