const rule1 = [5, 2, 6, 9]
const rule2 = [9, 7, 4, 5]
const rule3 = [2, 1, 7, 3]
const rule4 = [1, 4, 8, 7]
const rule5 = [7, 3, 8, 1]
const rule6 = [9, 2, 1, 8]
const rule7 = [4, 6, 7, 9]

const attempt = [6, 2, 3, 7]

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