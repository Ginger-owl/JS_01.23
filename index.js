// Task 1 - Stack
class Stack {
  constructor(maxStackLength = 10) {
    this.stack = []
    this.stackLength = 0
    if (!(/^\d+$/.test(maxStackLength) && maxStackLength > 0 && isFinite(maxStackLength))) {
      throw new Error('Invalid limit value')
    } else {
      this.maxStackLength = maxStackLength
    }
    
  }

  push(elem) {
    if (this.stack.length === this.maxStackLength) {
      throw new Error ("Limit exceeded")
    }

    this.stack[this.stackLength] = elem
    this.stackLength += 1
  }

  pop() {
    if (this.stackLength === 0) {
      throw new Error ("Empty stack")
    }

    const popped = this.stack[this.stackLength - 1]
    delete this.stack[this.stackLength - 1]
    this.stackLength -= 1
    return popped
  }

  peek() {
    if (this.stackLength === 0) {
      return null
    }
    return this.stack[this.stackLength - 1]
  }

  isEmpty() {
    return this.stackLength === 0
  }

  toArray() {
    if (this.stackLength === 0) {
      return []
    }

    let newArr = []
    for (let i = 0; i< this.stackLength; i++) {
      newArr[i] = this.stack[i]
    }
    return newArr
  }

  static fromIterable(iterable) {
    if (iterable == null || typeof Object(iterable[Symbol.iterator]) !== 'function') {
      throw new Error('Not iterable')
    }
    if (iterable.length > this.stackLength) {
      throw new Error('Iterable length exceeds maximum stack length')
    }
    const newStack = new Stack(iterable.length)

    for (let i = 0; i < iterable.length; i++) {
      newStack.push(iterable[i])
    }

    return newStack
  }
}
