// Task 1
const isValidNumber = (value) => {
  return /^\d+$/.test(value) && value > 0 && isFinite(value)
}

const promptNumber = () => {
  while (true) {
    const number = prompt('Input number...')
    if (isValidNumber(number)) {
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
  console.log(`Number: ${num}
Factorial: ${calculateFactorial(num)}
Square: ${calculateSquare(num)}
isPrime: ${isPrime(num)}
isEven: ${isEven(num)}
Delimeters: ${findDelimeters(num).join(', ')}`)
}


const task_one = () => {
  const num = promptNumber()
  outputNumberDetails(num)
}

task_one()