// Task 1
function makeDeepCopy (obj) {
  if (!isObject(obj)) {
    throw new Error()
  }
  const clone = {}

  for (const key in obj) {
    if (isObject(obj[key])) {
      if (obj[key] instanceof Map) {
        clone[key] = copyMap(obj[key])
      } else if (obj[key] instanceof Set) {
        clone[key] = copySet(obj[key])
      } else if (obj[key] instanceof Date) {
        clone[key] = copyDate(obj[key])
      } else {
        clone[key] = makeDeepCopy(obj[key])
      }
    } else {
      clone[key] = obj[key]
    }
  }
  return clone

  function copyMap(map) {
    const clonedMap = new Map()

    for (const entry of map) {
      clonedMap.set(...entry)
    }
    return clonedMap
  }

  function copyDate(date) {
    return new Date(date.getTime())
  }

  function copySet(set) {
    const clonedSet = new Set()

    for (const entry of set) {
      clonedSet.add(entry)
    }
    return clonedSet
  }

  function isObject(object) {
    return object != null && typeof object === 'object'
  }
}


// Task 2
function selectFromInterval(arr, firstInterval, secondInterval) {
  if (
    !Array.isArray(arr) ||
    !onlyValidNumbers(arr) ||
    !checkValidNumber(firstInterval) ||
    !checkValidNumber(secondInterval)
   ) {
    throw new Error ()
  }
  if (firstInterval > secondInterval) {
    return arr.filter((el) => el >= secondInterval && el <= firstInterval)
  } else {
    return arr.filter((el) => el >= firstInterval && el <= secondInterval)
  }

  function onlyValidNumbers(array) {
    return array.every((el) => {
      return checkValidNumber(el)
    })
  }

  function checkValidNumber(value) {
    return typeof value === 'number' && isFinite(value)
  }
}

// Task 3
function createIterable(from, to) {
  if (
    !checkValidNumber(from) ||
    !checkValidNumber(to) ||
    to <= from
    ) {
      throw new Error()
    }
  const iterObj = {
    from: from,
    to: to
  }

  iterObj[Symbol.iterator] = function () {
    return {
      current: this.from,
      last: this.to,

      next() {
        if (this.current <= this.last) {
          return {done: false, value: this.current++}
        } else {
          return {done: true}
        }
      }
    }
  }
  return iterObj

  function checkValidNumber(value) {
    return typeof value === 'number' && isFinite(value)
  }
}
