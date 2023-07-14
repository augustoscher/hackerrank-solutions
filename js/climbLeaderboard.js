// https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
function climbingLeaderboard(ranked, player) {
  const rankedSet = [...new Set(ranked)]
  return player.map((score) => {
    let position = 1
    for (let i = 0; i < rankedSet.length; i++) {
      if (rankedSet[i] > score) position++
    }
    return position
  })
}

console.log(climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102])) //6,5,4,2,1
console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])) //6,4,2,1