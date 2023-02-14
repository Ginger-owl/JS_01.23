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

// Task 2 - LinkedList
class LinkedList {
  constructor() {
    this.head = null
  }

  append(elem) {
    const newNode = this.#transformElemToNode(elem)
    let node = this.head
    if (node == null) {
      this.head = newNode
      return
    }
    while (node.next != null) {
      node = node.next
    }
    node.next = newNode
  }

  prepend(elem) {
    const newNode = this.#transformElemToNode(elem)
    let node = this.head
    if (node == null) {
      this.head = newNode
      return
    }
    newNode.next = this.head
    this.head = newNode
  }

  find(elem) {
    let node = this.head
    while (!(node == null)) {
      if (node.data === elem) {
        return node
      }
      node = node.next
    }
    return null
  }

  toArray() {
    const arr = []
    let node = this.head
    while (node != null) {
      arr.push(node.data)
      node = node.next
    }
    return arr
  }

  #transformElemToNode(elem) {
    const nodeObj = new Object()
    nodeObj.data = elem
    nodeObj.next = null
    return nodeObj
  }

  static fromIterable(iterable) {
    if (iterable == null || typeof Object(iterable[Symbol.iterator]) !== 'function') {
      throw new Error('Not iterable')
    }
   
    const newLinkedList = new LinkedList(iterable.length)
    for (let i = 0; i < iterable.length; i++) {
      newLinkedList.append(iterable[i])
    }

    return newLinkedList
  }
}
