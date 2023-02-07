// Task 1
Array.prototype.customFilter = function (callback, context = this) {
  const customFilter = (array, callback, context) => {
    const filteredArr = [];

    for (let value of array) {
      if (callback.call(context, value)) {
        filteredArr.push(value)
      }
    }
    return filteredArr
  }

  const baseArray = this;

  return customFilter(baseArray, callback, context)

}

// Task 2
function createDebounceFunction(callback, timeout) {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => { 
      callback.apply(this, args);
    }, timeout)
  }
}
