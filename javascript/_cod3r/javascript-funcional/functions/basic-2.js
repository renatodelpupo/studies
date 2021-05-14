//
// inner functions

const mySum = (value1) => {
  return (value2) => {
    return (value3) => {
      return value1 + value2 + value3
    }
  }
}

const mySumResult = mySum(1)(2)(3)
console.log(mySumResult)

//
// function by param

const myCalc = (value1) => {
  return (value2) => {
    return (operator) => {
      return operator(value1, value2)
    }
  }
}

const multiplication = (value1, value2) => {
  return value1 * value2
}

const myCalcResult = myCalc(2)(4)(multiplication)
console.log(myCalcResult)
