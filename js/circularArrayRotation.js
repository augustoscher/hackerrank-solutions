// int a[n]: the array to rotate
// int k: the rotation count
// int queries[1]: the indices to report
function circularArrayRotation(a, k, queries) {
  for (let i = 0; i < k; i++) {
    a.unshift(a.pop())
  }

  return queries.map((q) => a[q])
}

console.log(circularArrayRotation([1,2,3], 2, [0,1,2])) //2,3,1