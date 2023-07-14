// https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
// function climbingLeaderboard(ranked, player) {
//   const rankedSet = [...new Set(ranked)]
//   return player.map((score) => {
//     let position = 1
//     for (let i = 0; i < rankedSet.length; i++) {
//       if (rankedSet[i] > score) {
//         position++
//       } 
//     }
//     return position
//   })
// }
function climbingLeaderboard(ranked, player) {
  const rankedSet = [...new Set(ranked)]
  const ranks = []; 

  for(let i = ranked.length-1; i >- 1; i--) {
    while(player.length > 0) {
      let flag = player.shift();

      if (flag < rankedSet[i]) {
        ranks.push(i + 2);
      } else if (flag === rankedSet[i]) {
        ranks.push(i + 1);
      } else {
        player.unshift(flag);
        break;
      }
    }
  }

  player.forEach(p=>ranks.push(1));
  return ranks;
}

console.log(climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102])) //6,5,4,2,1
console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])) //6,4,2,1
console.log(climbingLeaderboard([99999832, 99999819, 99999396, 99998872, 99998186, 99997433, 99995165, 99995036, 99994738, 99994351, 99993668], [0,0,0,0,1,1,2,2,99999833]))