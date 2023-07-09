// Complete the squares function in the editor below. It should return an integer representing the number of square integers in the inclusive range from  to .

const fillRange = (start, end) => Array(end - start + 1).fill().map((_item, index) => start + index);

const getSquares = (start, end) => {
  const range = fillRange(start, end);
  return range.filter((num) => Number.isInteger(Math.sqrt(num))).length;
}

console.log(getSquares(25, 49)) //2
console.log(getSquares(17, 24)) //0
