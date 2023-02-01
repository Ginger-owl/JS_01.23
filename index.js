// Task 1
const checkValidNumber = (value) => {
  return /^\d+$/.test(value) && value > 0 && isFinite(value)
}

const promptNumber = () => {
  while (true) {
    const number = prompt('Input number...').trim()
    if (checkValidNumber(number)) {
      return +number
    }
    console.log('Incorrect input!')
  }
}

const calculateFactorial = (num) => {
  let factorial = 1
  for (let i = 1; i <= num; i++) {
    factorial *= i
  }
  return factorial
}

const calculateSquare = (num) => {
  return num ** 2
}

const isPrime = (num) => {
  if (num === 1) {
    return false
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

const findDelimeters = (num) => {
  const delimeters = []
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      delimeters.push(i)
    }
  }
  return delimeters
}

const isEven = (num) => {
  return num % 2 === 0
}

const outputNumberDetails = (num) => {
  console.log(
`Number: ${num}
Factorial: ${calculateFactorial(num)}
Square: ${calculateSquare(num)}
isPrime: ${isPrime(num)}
isEven: ${isEven(num)}
Delimeters: ${findDelimeters(num).join(', ')}`)
}


const taskOne = () => {
  const num = promptNumber()
  outputNumberDetails(num)
}

// Task 2
const checkValidSymbols = (symbols) => {
  return /^\S.?\S?$/.test(symbols)
}

const promptForSymbols = () => {
  while (true) {
    const symbols = prompt('Input one to three characters').trim()
    if (checkValidSymbols(symbols)) {
      return symbols
    }
    console.log('Incorrect input!')
  }
}

const promptForNumber = () => {
  while (true) {
    const num = prompt('Input any digit from 1 to 9 (including)').trim()
    if (checkValidNumber(num) && num < 10) {
      return +num
    }
    console.log('Incorrect input!')
  }
}

const formatOutput = (symbols, num) => {
  let output = ''
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      output += `${symbols}`
      if (j === num - 1) {
        output += '\n'
      } else {
        output += ' '
      }
    }
  }
  return output
}

const taskTwo = () => {
  const symbols = promptForSymbols()
  const num = promptForNumber()
  const output = formatOutput(symbols, num)
  console.log(output)
}

taskOne()
taskTwo()
