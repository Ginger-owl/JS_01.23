class Calculator {
  constructor() {
    this.firstNumber = 0
    this.secondNumber = 0
    this.firstNumberChosen = false
    this.operator = null
    this.result
    this.displayedValue = "0"
  }

  render() {
    return (
     `<div class="calculator">
        <div class="calculator__screen">
          <input class="screen__input ${this.displayedValue}" id="screen" type="text" value="${this.displayedValue}" readonly/>
        </div>
        <div id="calculator__controls" class="calculator__controls">
          <button class="calculator__button button-clear">C</button>
          <button class="calculator__button button-negate">+/-</button>
          <button class="calculator__button button-delete">Del</button>
          <button class="calculator__button button-divide">/</button>
          
          <button class="calculator__button button-num">7</button>
          <button class="calculator__button button-num">8</button>
          <button class="calculator__button button-num">9</button>
          <button class="calculator__button button-multiply">*</button>

          <button class="calculator__button button-num">4</button>
          <button class="calculator__button button-num">5</button>
          <button class="calculator__button button-num">6</button>
          <button class="calculator__button button-substract">-</button>

          <button class="calculator__button button-num">1</button>
          <button class="calculator__button button-num">2</button>
          <button class="calculator__button button-num">3</button>
          <button class="calculator__button button-sum">+</button>

          <button class="calculator__button button-num">0</button>
          <button class="calculator__button button-num">00</button>
          <button class="calculator__button button-dot">.</button>
          <button class="calculator__button button-equals">=</button>
        </div>
        <div class="calculator__promo">Keyboard friendly 🤓</div>
     </div>`
    )
  }

  #renderDisplay = () => {
    document.getElementById("screen").value = this.displayedValue
  }

  #removeChosenOperatorStatus = () => {
    const buttons = document.getElementsByClassName("calculator__button")
      for(let i = 0; i < buttons.length; i++) {
        if (buttons[i].classList.contains("button-chosen")) {
          buttons[i].classList.remove("button-chosen")
        }
      }
  }

  #setNumber = (num) => {
    if (this.firstNumberChosen) {
      if (this.secondNumber === 0) {
        this.secondNumber = num
      } else {
        if (num === "." && String(this.secondNumber).indexOf(".") !== -1) {
          return
        }
        this.secondNumber = String(this.secondNumber) + num
      }
      this.#setDisplayedValue(this.secondNumber)
    } else {
      if (this.firstNumber === 0 || this.firstNumber === this.result) {
        this.firstNumber = num
      } else {
        if (num === "." && String(this.firstNumber).indexOf(".") !== -1) {
          return
        }
        this.firstNumber = String(this.firstNumber) + num
      }
      this.#setDisplayedValue(this.firstNumber)
    }
  }

  #setDisplayedValue = (value) => {
    if (value === "0") {
      this.displayedValue = "0"
    } else {
      if (String(value).indexOf(".") !== -1 &&
          String(value).indexOf(".") !== 0 &&
          String(value).indexOf(".") !== value.length - 1) {
        let floatingPart = String(value).split(".")[1].split("")
        let decimalPlaces = floatingPart.reduce((acc, x) => {
          if (x !== "0") {
            acc += 1
          }
          return acc
        }, 0)
        if (decimalPlaces > 8) {
          decimalPlaces = 8
        }
        this.displayedValue = String(Number(value).toFixed(decimalPlaces))
      } else {
        this.displayedValue = String(value)
      }
    }
    this.#renderDisplay()
  }


  #calculate = () => {
    if (this.firstNumberChosen) {
      this.result = this.operator()
      this.#removeChosenOperatorStatus()
      if (this.result === "Not a number") {
        this.firstNumber = 0
      } else {
        this.firstNumber = this.result
      }
      this.secondNumber = 0
      this.operator = null
      this.#setDisplayedValue(this.result)
    }
    this.firstNumberChosen = false
  }

  #prepareOperation = (operation) => {
    if (!this.firstNumberChosen) {
      this.firstNumberChosen= true
    }
    if (this.operator != null) {
      this.result = this.operator()
      this.#removeChosenOperatorStatus()
      if (this.result === "Not a number") {
        this.firstNumber = 0
      } else {
        this.firstNumber = this.result
      }
      this.secondNumber = 0
      this.#setDisplayedValue(this.result)
    }
    this.operator = operation
  }

  #clear = () => {
    this.firstNumber = 0
    this.secondNumber = 0
    this.operator = null
    this.#removeChosenOperatorStatus()
    this.firstNumberChosen = false
    this.#setDisplayedValue(this.firstNumber)
  }

  #delete = () => {
    if (this.firstNumberChosen) {
      this.secondNumber = Number(String(this.secondNumber).slice(0, -1))
      this.#setDisplayedValue(this.secondNumber)
    } else {
      this.firstNumber = Number(String(this.firstNumber).slice(0, -1))
      this.#setDisplayedValue(this.firstNumber)
    }
  }

  #negate = () => {
    if (this.firstNumberChosen) {
      this.secondNumber = -this.secondNumber
      this.#setDisplayedValue(this.secondNumber)
    } else {
      this.firstNumber = -this.firstNumber
      this.#setDisplayedValue(this.firstNumber)
    }
  }

  #sum = () => {
    return Number(this.firstNumber) + Number(this.secondNumber)
  }

  #substract = () => {
    return Number(this.firstNumber) - Number(this.secondNumber)
  }
  

  #multiply = () => {
    return Number(this.firstNumber) * Number(this.secondNumber)
  }
  
  #divide = () => {
    if (this.secondNumber != 0) {
      return Number(this.firstNumber) / Number(this.secondNumber)
    } else {
      return "Not a number"
    }
  }

  listen() {
    const calculatorControls = document.getElementById("calculator__controls")
    calculatorControls.addEventListener("click", (e) => {
      if (e.target.classList.contains("button-num") || e.target.classList.contains("button-dot")) {
        this.#setNumber(e.target.textContent)
      } else if (e.target.classList.contains("button-clear")) {
        this.#clear()
      } else if (e.target.classList.contains("button-delete")) {
        this.#delete()
      } else if (e.target.classList.contains("button-negate")) {
        this.#negate()
      } else if (e.target.classList.contains("button-equals")) {
        this.#calculate()
      } else if (e.target.classList.contains("button-sum")) {
        this.#prepareOperation(this.#sum)
        e.target.classList.add("button-chosen")
      } else if (e.target.classList.contains("button-substract")) {
        this.#prepareOperation(this.#substract)
        e.target.classList.add("button-chosen")
      } else if (e.target.classList.contains("button-multiply")) {
        this.#prepareOperation(this.#multiply)
        e.target.classList.add("button-chosen")
      } else if (e.target.classList.contains("button-divide")) {
        this.#prepareOperation(this.#divide)
        e.target.classList.add("button-chosen")
      }
    })

    window.addEventListener("keydown", (e) => {
      if (/^[\d|\.]$/.test(e.key)) {
        this.#setNumber(e.key)
      }  else if (e.key === "Backspace" && e.ctrlKey) {
        this.#clear()
      } else if (e.key === "Backspace") {
        this.#delete()
      } else if (e.key === "-" && e.ctrlKey) {
        this.#negate()
      } else if (e.key === "Enter" || e.key === "=") {
        this.#calculate()
      } else if (e.key === "+") {
        this.#prepareOperation(this.#sum)
        document.querySelector(".button-sum").classList.add("button-chosen")
      } else if (e.key === "-") {
        this.#prepareOperation(this.#substract)
        document.querySelector(".button-substract").classList.add("button-chosen")
      } else if (e.key === "*") {
        this.#prepareOperation(this.#multiply)
        document.querySelector(".button-multiply").classList.add("button-chosen")
      } else if (e.key === "/") {
        this.#prepareOperation(this.#divide)
        document.querySelector(".button-divide").classList.add("button-chosen")
      }
    })
  }

}

const calculator = new Calculator()
document.body.innerHTML = calculator.render()
calculator.listen()
