//HackerRank - Jumping on the Clouds

// parameter(s):
// int c[n]: an array of binary integers

// Returns:
// int: the minimum number of jumps required

const jumpingOnClouds = c => {
  const clouds = c.map((item, index) => ({ 'index': index, 'cloud': item }) );
  let jumps = 0;
  let jumpIndex = 0

  while(jumpIndex < clouds[clouds.length -1].index) {
    if (clouds[jumpIndex + 2]?.cloud == 0) { // will jump on valid cloud
      jumpIndex += 2
    } else {
      jumpIndex += 1
    }
    jumps += 1
  }
  return jumps;
}

console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0])) // 3
console.log(jumpingOnClouds([0, 0, 0, 1, 0, 0])) // 3
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])) // 4
