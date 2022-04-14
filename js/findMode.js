// findMode

class NumberGenerator {

  constructor(numbers) {
    this.numbersArray = numbers.split(", ");
  }

  mode() {
    const map = {}

    Object.values(this.numbersArray).forEach(item => 
      map[item] = !!map[item] ? parseInt(map[item]) + 1 : 1
    )

    const obj =
      Object.keys(map)
        .map((k) => ({ k, v: map[k] }))
        .reduce((acc, current) => {
          return acc.v > current.v ? acc : current
        }, 0)

    return obj.k
  }
}

const myNumberGenerator1 = new NumberGenerator("8, 1, 2, 5, 6, 8, 9, 5, 6, 17, 22, 55, 5")
const myNumberGenerator2 = new NumberGenerator("1, 4, 10, 11, 10, 12, 16, 18, 22, 24, 122")
const myNumberGenerator3 = new NumberGenerator("1, 500, 400, 500, 12, 1, 1, 122, 122, 122, 122")

console.log(myNumberGenerator1.mode()) // 5
console.log(myNumberGenerator2.mode()) // 10
console.log(myNumberGenerator3.mode()) // 122