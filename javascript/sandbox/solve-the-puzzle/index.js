const puzzleRules = [
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

const puzzleTest = () => {
  const _inputValue = document.querySelector('#answer').value
  const attempt = _inputValue.toString().split('').map(Number)
  let errors = 0

  console.group('Puzzle')

  puzzleRules.forEach((rule, index) => {
    const numbers = rule.numbers
    const ruleId = index + 1

    const verifyNumbers = attempt.filter((attemptItem) => numbers.includes(attemptItem))
    const verifyPositions = attempt.filter((attemptItem, attemptIndex) => numbers.includes(attemptItem) && numbers.indexOf(attemptItem) === attemptIndex)

    const numbersCorrect = verifyNumbers.length === rule.correctNumbers
    const positionsCorrect = verifyPositions.length === rule.correctPositions

    numbersCorrect && positionsCorrect ? console.log(`Rule ${ruleId} correct`) : console.log(`Rule ${ruleId} incorrect`)

    if (!numbersCorrect || !positionsCorrect) errors++
  })

  errors > 0 ? console.log(`Puzzle has an error`) : console.log(`Puzzle successfully verified`)
  console.groupEnd()
}