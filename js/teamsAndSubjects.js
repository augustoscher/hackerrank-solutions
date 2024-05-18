function acmTeam(topic) {
  let teams = {}
  for (let i = 0; i < topic.length; i++) {
    for (let j = i+1; j < topic.length; j++)
      teams[`${i}:${j}`] = [topic[i], topic[j]]
  }

  const arr = Object.keys(teams).map((key) => {
    const s = teams[key].reduce((acc, strSubs) => {
      const arr = strSubs.split('')
      for (let x = 0; x < arr.length; x++)
        if (arr[x] === '1') acc.add(x+1)

      return acc
    }, new Set())

    return {
      key,
      knowSubjects: s.size
    }
  })

  const maxSubs = arr.reduce((acc, item) => acc > item.knowSubjects ? acc : item.knowSubjects, 0)
  const maxTeams = arr.filter((item) => item.knowSubjects === maxSubs)

  return [maxSubs, maxTeams.length]
}

console.log(acmTeam(['10101', '11110', '00010'])) // [5, 1]
console.log(acmTeam(['10101', '11100', '11010', '00101'])) // [5, 2]
