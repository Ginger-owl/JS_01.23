// Task 1
Array.prototype.customFilter = function (callback, context = this) {
  const filteredArr = []

    for (let i = 0; i < this.length; i++) {
      if (callback.call(context, this[i], i, this)) {
        filteredArr.push(this[i])
      }
    }
    return filteredArr
}


// Task 2
function createDebounceFunction(callback, timeout) {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => { 
      callback.apply(this, args)
    }, timeout)
  }
}
