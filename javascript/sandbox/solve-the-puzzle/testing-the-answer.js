const rule1 = [5, 2, 6, 9]
const rule2 = [9, 7, 4, 5]
const rule3 = [2, 1, 7, 3]
const rule4 = [1, 4, 8, 7]
const rule5 = [7, 3, 8, 1]
const rule6 = [9, 2, 1, 8]
const rule7 = [4, 6, 7, 9]

const attempt = [6, 2, 3, 7]

// Testing for numbers occurrences in puzzle 2

if (attempt.filter(number => rule1.includes(number)).length == 2) {
  console.log('Successful check one')
} else {
  console.log('Fail check one')
}

if (attempt.filter(number => rule2.includes(number)).length == 1) {
  console.log('Successful check two')
} else {
  console.log('Fail check two')
}

if (attempt.filter(number => rule3.includes(number)).length == 3) {
  console.log('Successful check three')
} else {
  console.log('Fail check three')
}

if (attempt.filter(number => rule4.includes(number)).length == 1) {
  console.log('Successful check four')
} else {
  console.log('Fail check four')
}

if (attempt.filter(number => rule5.includes(number)).length == 2) {
  console.log('Successful check five')
} else {
  console.log('Fail check five')
}

if (attempt.filter(number => rule6.includes(number)).length == 1) {
  console.log('Successful check six')
} else {
  console.log('Fail check six')
}

if (attempt.filter(number => rule7.includes(number)).length == 2) {
  console.log('Successful check seven')
} else {
  console.log('Fail check seven')
}

// Testing for numbers positions in puzzle 2

const checkRule1 = attempt.filter((attemptItem, attemptItemIndex) => {
  if (rule1.includes(attemptItem)) {
    return rule1.indexOf(attemptItem) == attemptItemIndex
  }
})

checkRule1.length == 1 ? console.log('Successful check one') : console.log('Fail check one')

const checkRule2 = attempt.filter((attemptItem, attemptItemIndex) => {
  if (rule2.includes(attemptItem)) {
    return rule2.indexOf(attemptItem) == attemptItemIndex
  }
})

checkRule2.length == 0 ? console.log('Successful check two') : console.log('Fail check two')

const checkRule3 = attempt.filter((attemptItem, attemptItemIndex) => {
  if (rule3.includes(attemptItem)) {
    return rule3.indexOf(attemptItem) == attemptItemIndex
  }
})

checkRule3.length == 0 ? console.log('Successful check three') : console.log('Fail check three')

const checkRule4 = attempt.filter((attemptItem, attemptItemIndex) => {
  if (rule4.includes(attemptItem)) {
    return rule4.indexOf(attemptItem) == attemptItemIndex
  }
})

checkRule4.length == 1 ? console.log('Successful check four') : console.log('Fail check four')

const checkRule5 = attempt.filter((attemptItem, attemptItemIndex) => {
  if (rule5.includes(attemptItem)) {
    return rule5.indexOf(attemptItem) == attemptItemIndex
  }
})

checkRule5.length == 0 ? console.log('Successful check five') : console.log('Fail check five')

const checkRule6 = attempt.filter((attemptItem, attemptItemIndex) => {
  if (rule6.includes(attemptItem)) {
    return rule6.indexOf(attemptItem) == attemptItemIndex
  }
})

checkRule6.length == 1 ? console.log('Successful check six') : console.log('Fail check six')

const checkRule7 = attempt.filter((attemptItem, attemptItemIndex) => {
  if (rule7.includes(attemptItem)) {
    return rule7.indexOf(attemptItem) == attemptItemIndex
  }
})

checkRule7.length == 0 ? console.log('Successful check seven') : console.log('Fail check seven')