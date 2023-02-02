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
