// Task 1
function makeDeepCopy (obj) {
  if (!isObject(obj)) {
    throw new Error()
  }
  const clone = {};

  for (const key in obj) {
    if (isObject(obj[key])) {
      clone[key] = makeDeepCopy(obj[key])
    } else {
      clone[key] = obj[key];
    }
  }
  return clone

  function isObject(object) {
    return object != null && typeof object === 'object';
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

