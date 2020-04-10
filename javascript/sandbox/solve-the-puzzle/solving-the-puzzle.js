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

const puzzleTest = (attempt, rules) => {
  let errors = 0

  rules.forEach((rule) => {
    const numbers = rule.numbers

    const verifyNumbers = attempt.filter((attemptItem) => numbers.includes(attemptItem))
    const verifyPositions = attempt.filter((attemptItem, attemptIndex) => numbers.includes(attemptItem) && numbers.indexOf(attemptItem) === attemptIndex)

    const numbersCorrect = verifyNumbers.length === rule.correctNumbers
    const positionsCorrect = verifyPositions.length === rule.correctPositions

    if (!numbersCorrect || !positionsCorrect) errors++
  })

  return errors === 0
}

const puzzleVerification = puzzleRules => {
  const _puzzleRulesLength = puzzleRules[0].numbers.length
  const attemptMax = Math.pow(10, _puzzleRulesLength) - 1
  const attemptMin = Math.pow(10, _puzzleRulesLength - 1)

  for (puzzleAttempt = attemptMin; puzzleAttempt <= attemptMax; puzzleAttempt++) {
    const answer = puzzleAttempt.toString().split('').map(Number)

    if (puzzleTest(answer, puzzleRules)) {
      console.log(`The answer is ${answer}`)
      break
    }
  }
}

puzzleVerification(puzzleOneRules)
puzzleVerification(puzzleTwoRules)