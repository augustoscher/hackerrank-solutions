// HackerRank: Cut the sticks
// cutTheSticks has the following parameter(s):
// int arr[n]: the lengths of each stick

// Returns
// int[]: the number of sticks after each iteration

//  When all the remaining sticks are the same length, they cannot be shortened so discard them.
// It should return an array of integers representing the number of sticks before each cut operation is performed.
const cutTheSticks = (arr) => {
  arr.sort((a, b) => a - b)
  const res = []

  while(arr.length >= 1) {
    res.push(arr.length)

    let smallest = arr[0]

    let qtd = arr.filter(item => item == smallest).length

    arr.splice(0, qtd);

    arr = arr.map(item => item - smallest)
  }

  return res;
}


console.log("answear: ", cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1])) //8, 6, 4, 1
