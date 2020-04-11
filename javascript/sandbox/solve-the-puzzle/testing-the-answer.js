const puzzleOneRules = [
  {
    correctNumbers: 1,
    correctPositions: 1,
    numbers: [2, 8, 9]
  },
  {
    correctNumbers: 1,
    correctPositions: 0,
    numbers: [2, 1, 5]
  },
  {
    correctNumbers: 2,
    correctPositions: 0,
    numbers: [9, 4, 2]
  },
  {
    correctNumbers: 0,
    correctPositions: 0,
    numbers: [7, 3, 8]
  },
  {
    correctNumbers: 1,
    correctPositions: 0,
    numbers: [7, 8, 4]
  }
]

const puzzleOneAttempt = [4, 5, 9]

const puzzleTwoRules = [
  {
    correctNumbers: 2,
    correctPositions: 1,
    numbers: [5, 2, 6, 9]
  },
  {
    correctNumbers: 1,
    correctPositions: 0,
    numbers: [9, 7, 4, 5]
  },
  {
    correctNumbers: 3,
    correctPositions: 0,
    numbers: [2, 1, 7, 3]
  },
  {
    correctNumbers: 1,
    correctPositions: 1,
    numbers: [1, 4, 8, 7]
  },
  {
    correctNumbers: 2,
    correctPositions: 0,
    numbers: [7, 3, 8, 1]
  },
  {
    correctNumbers: 1,
    correctPositions: 1,
    numbers: [9, 2, 1, 8]
  },
  {
    correctNumbers: 2,
    correctPositions: 0,
    numbers: [4, 6, 7, 9]
  }
]

const puzzleTwoAttempt = [6, 2, 3, 7]

const puzzleTest = (attempt, puzzleName, rules) => {
  let errors = 0

  console.group(puzzleName)

  rules.forEach((rule, index) => {
    const numbers = rule.numbers
    const ruleId = index + 1

    const verifyNumbers = attempt.filter((attemptItem) => numbers.includes(attemptItem))
    const verifyPositions = attempt.filter((attemptItem, attemptIndex) => numbers.includes(attemptItem) && numbers.indexOf(attemptItem) === attemptIndex)

    const numbersCorrect = verifyNumbers.length === rule.correctNumbers
    const positionsCorrect = verifyPositions.length === rule.correctPositions

    numbersCorrect && positionsCorrect ? console.log(`Rule ${ruleId} correct`) : console.log(`Rule ${ruleId} incorrect`)

    if (!numbersCorrect || !positionsCorrect) errors++
  })

  errors > 0 ? console.log(`${puzzleName} has an error`) : console.log(`${puzzleName} successfully verified`)
  console.groupEnd()
}

puzzleTest(puzzleOneAttempt, 'puzzleOne', puzzleOneRules)
puzzleTest(puzzleTwoAttempt, 'puzzleTwo', puzzleTwoRules)