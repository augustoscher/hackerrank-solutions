// Complete the squares function in the editor below. It should return an integer representing the number of square integers in the inclusive range from  to .

function squares(a, b) {
  const newA = Math.sqrt(a) % 1 === 0 ? a - 1: a;
  const newB = Math.sqrt(b) % 1 === 0 ? b + 1: b;
  // console.log(newA, newB)
  // console.log(Math.floor(Math.sqrt(newB)))
  // console.log(Math.floor(Math.sqrt(newA)))
  return (Math.floor(Math.sqrt(newB)) - Math.floor(Math.sqrt(newA)));
}


console.log(squares(24, 49)) //3
console.log(squares(59, 999999922) === 31615)
console.log(squares(9, 999999966) === 31620)
console.log(squares(23, 999999988) === 31618) 
