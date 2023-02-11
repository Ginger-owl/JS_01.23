// Task 1 - Curry
function curry(fn, ...args) {
  if (args.length >= fn.length) {
    return fn(...args)
  }
  return (...moreArgs) => curry(fn, ...args, ...moreArgs)
}

// Task 2 - Calculator
class Calculator {
  constructor(x, y) {
    if (!this.#checkValidNumber(x) || !this.#checkValidNumber(y)) {
      throw new Error () 
    }
    this.x = x
    this.y = y
  }

  setX = (num) => {
    if (!this.#checkValidNumber(num)) {
      throw new Error ()
    }
    this.x = num
  }
  setY = (num) => {
    if (!this.#checkValidNumber(num)) {
      throw new Error ()
    }
    this.y = num
  }
  getSum= () => {
    return this.x + this.y
  } 
  getMul = () => {
    return this.x * this.y
  }
  getSub = () => {
    return this.x - this.y
  }
  getDiv = () => {
    if (this.y === 0) {
      throw new Error ()
    }
    return this.x / this.y
  }

  #checkValidNumber = (num) => {
    console.log(typeof num)
    return typeof num !== 'bigint' && typeof num === 'number' && isFinite(num)
  }
}

// Task 3
class RickAndMorty {
  constructor() {
  }

  getCharacter(id) {
    if (!id || typeof id === 'bigint' || !isFinite(id)) {
      throw new Error ()
    }
    return new Promise((resolve, reject) => {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res) => {
          return res.json()
        })
        .then((characterData) => {
          if (characterData.error) {
            resolve(null)
          } else {
            resolve(characterData)
          }
        })
        .catch((e) => {
          reject(e)
        })
    })
  }
  
  async getEpisode(id) {
    if (!id || typeof id === 'bigint' || !isFinite(id)) {
      throw new Error ()
    }
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`)
      const episodeData = await res.json()
      if (episodeData.error) {
        return null
      }
      return episodeData
    } catch (err) {
      return null
    }   
  }
}
