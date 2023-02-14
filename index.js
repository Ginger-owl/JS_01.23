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
      throw new Error ('Limit exceeded')
    }

    this.stack[this.stackLength] = elem
    this.stackLength += 1
  }

  pop() {
    if (this.stackLength === 0) {
      throw new Error ('Empty stack')
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


//Task 3 - Car
class Car {
  // restrictions on car parameters
  #MIN_STRING_LENGTH = 1
  #MAX_STRING_LENGTH = 50
  #MIN_MANUFACTURING_YEAR = 1950
  #MAX_MANUFACTURING_YEAR = new Date().getFullYear()
  #MIN_SPEED = 100
  #MAX_SPEED = 330
  #MIN_FUEL_VOLUME = 100
  #MAX_FUEL_VOLUME = 100
  #MIN_FUEL_CONSUMPTION = 0
  #MIN_DAMAGE = 1
  #MAX_DAMAGE = 5
  // car's properties
  #brand = ''
  #model = ''
  #yearOfManufacturing = 1950
  #maxSpeed = 100
  #maxFuelVolume = 20
  #fuelConsumption = 1
  #damage = 1
  #currentFuelVolume = 0
  #isStarted = false
  #mileage = 0
  #health = 100

  constructor() {}

  get brand() {
    return this.#brand
  }

  set brand(value) {
    if (!this.#isValidString(value)) {
      throw new Error('Invalid brand name')
    }
    this.#brand = value
  }

  get model() {
    return this.#model
  }

  set model(value) {
    if (!this.#isValidString(value)) {
      throw new Error('Invalid model name')
    }
    this.#model = value
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing
  }

  set yearOfManufacturing(value) {
    if (
      this.#isValidInteger(value) ||
      value < this.#MIN_MANUFACTURING_YEAR ||
      value > this.#MAX_MANUFACTURING_YEAR
      ) {
        throw new Error('Invalid year of manufacturing')
    }
    this.#yearOfManufacturing = Number(value)
  }

  get maxSpeed() {
    return this.#maxSpeed
  }

  set maxSpeed(value) {
    if (
      this.#isValidNumber(value) ||
      value < this.#MIN_SPEED ||
      value > this.#MAX_SPEED
      ) {
      throw new Error('Invalid max speed')
    }
    this.#maxSpeed = Number(value)
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume
  }

  set maxFuelVolume(value) {
    if (
      this.#isValidNumber(value) ||
      value < this.#MIN_FUEL_VOLUME ||
      value > this.#MAX_FUEL_VOLUME
      ) {
      throw new Error('Invalid max fuel volume')
    }
    this.#maxFuelVolume = Number(value)
  }

  get fuelConsumption() {
    return this.#fuelConsumption
  }

  set fuelConsumption(value) {
    if (
      this.#isValidNumber(value) ||
      value < this.#MIN_FUEL_CONSUMPTION
      ) {
        throw new Error('Invalid fuel consumption')
    }
    this.#fuelConsumption = Number(value)
  }

  get damage() {
    return this.#damage
  }

  set damage(value) {
    if (
      this.#isValidNumber(value) ||
      value < this.#MIN_DAMAGE ||
      value > this.#MAX_DAMAGE
      ) {
      throw new Error('Invalid damage')
    }
    this.#damage = Number(value)
  }

  get currentFuelVolume() {
    return this.#currentFuelVolume
  }

  get isStarted() {
    return this.#isStarted
  }

  get mileage() {
    return this.#mileage
  }

  get health() {
    return this.#health
  }
  
  start() {
    if (this.#isStarted) {
      throw new Error ('Car has already started')
    }
    this.#isStarted = true
  }

  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error ('Car hasn\'t started yet')
    }
    this.#isStarted = false
  }

  fillUpGasTank(volume) {
    if (!this.#isValidNumber(volume)) {
      throw new Error ('Invalid fuel amount')
    } else if (this.#maxFuelVolume < this.#currentFuelVolume + volume) {
      throw new Error ('Too much fuel')
    } else if (this.#isStarted) {
      throw new Error ('You have to shut down your car first')
    }
    this.#currentFuelVolume += volume
  }

  drive(speed, hours) {
    if (!this.#isValidNumber(speed) || speed <= 0) {
      throw new Error ('Invalid speed')
    }
    if (!this.#isValidNumber(hours) || hours <= 0) {
      throw new Error ('Invalid duration')
    }
    if (speed > this.#maxSpeed) {
      throw new Error ('Car can\'t go this fast')
    }
    if (!this.#isStarted) {
      throw new Error ('You have to start your car first')
    }

    const distance = speed * hours
    const fuelNeeded = (this.#fuelConsumption / 100) * distance
    const healthNeeded = (this.#damage / 100) * distance

    if (this.#currentFuelVolume < fuelNeeded) {
      throw new Error ('You don\'t have enough fuel')
    }
    if (this.#health < healthNeeded) {
      throw new Error ('Your car won’t make it')
    }
    this.#mileage += distance
    this.#health -= healthNeeded
    this.#currentFuelVolume -= fuelNeeded
  }

  repair() {
    if (this.#isStarted) {
      throw new Error ('You have to shut down your car first')
    }
    if (this.#currentFuelVolume !== this.#maxFuelVolume) {
      throw new Error ('You have to fill up your gas tank first')
    }
    this.#health = 100
  }

  getFullAmount() {
    return this.#maxFuelVolume - this.#currentFuelVolume
  }

  #isValidString(value) {
    return typeof value === 'string' &&
      value.length > this.#MIN_STRING_LENGTH &&
      value.length <= this.#MAX_STRING_LENGTH
  }

  #isValidNumber(value) {
    return typeof value === 'number' && isFinite(value)
  }
  #isValidInteger(value) {
    return /^\d+$/.test(value) && typeof value === 'number' && isFinite(value)
  }
}
