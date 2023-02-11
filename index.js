// Task 1
function curry(fn, ...args) {
  if (args.length >= fn.length) {
    return fn(...args)
  }
  return (...moreArgs) => curry(fn, ...args, ...moreArgs)
}

// Task 2



// Task 3

