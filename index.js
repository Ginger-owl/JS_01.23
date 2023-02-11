// Task 1
function curry(fn, ...args) {
  if (args.length >= fn.length) {
    return fn(...args)
  }
  return (...moreArgs) => curry(fn, ...args, ...moreArgs)
}

// Tests for task 1
function sum(a, b, c) {
  return a + b + c;
}

let curried = curry(sum)
console.log(curried(1, 2, 3)); // 6
console.log(curried(1)(2,3)); // 6
console.log(curried(1)(2)(3)); // 6


// Task 2



// Task 3

