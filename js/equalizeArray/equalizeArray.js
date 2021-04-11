// HackerRank - Equalize the Array
// Given an array of integers, determine the minimum number of elements to delete to leave only elements of equal value.

// Returns
// int: the minimum number of deletions required

// Input Format
// The next line contains  space-separated integers .

const equalizeArray = (arr) => {
  const map = new Map();

  // O(n) solution
  // count how many times each value is repeated
  arr.forEach(key => {
    let value = map.get(key);
    if(!value) value = 0;
    map.set(key, value + 1);
  });
  //structure ex: Map(3) { 1 => 2, 2 => 2, 3 => 4 }

  // destructuring map.values: 2, 2, 4
  return arr.length - Math.max(...map.values());
}

const equalizeArray_v1 = (arr) => {
  const map = new Map();

  arr.forEach(key => map.set(key, (map.get(key) || 0) + 1));
  return arr.length - Math.max(...map.values());
}


// console.log(equalizeArray([3, 3, 2, 1, 3])) //2
console.log(equalizeArray([1, 2, 3, 1, 2, 3, 3, 3])) //4