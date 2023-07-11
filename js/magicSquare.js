// dd 1+2+3+4+5+6+7+8+9 = 45, then divide by 3. The magic constant for this example is 15, as 45 / 3 = 15



const formingMagicSquare = (s) => {
  const magicSquares = [
    [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
    [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
    [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
    [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
    [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
    [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
    [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
    [[2, 7, 6], [9, 5, 1], [4, 3, 8]]
  ]

  let minCost = Number.MAX_SAFE_INTEGER
  for (const magicSquare of magicSquares) {
    let cost = 0
    for (let i = 0; i < 3; i++)
      for (let j = 0; j < 3; j++)
        cost += Math.abs(s[i][j] - magicSquare[i][j])

    minCost = Math.min(minCost, cost)
  }

  console.log(minCost)
}


formingMagicSquare([[4, 8, 2],[4, 5, 7],[6, 1, 6]]) //4
formingMagicSquare([[4, 9, 2], [3, 5, 7], [8, 1, 5]]) //1
formingMagicSquare([[2, 5, 4],[4, 6, 9],[4, 5, 2]]) //16
