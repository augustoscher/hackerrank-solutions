// Given:
// -Starting day
// -Number of days to sum considering starting day
// -Discover in what day in the week it will be, by (starting day + number of days)

const printMessage = (starting, daysAfter, result) => {
  console.log(`${starting} + ${daysAfter} = ${result}`)
}

function solution(weekDay, numberOfDays) {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((item, id) => ({
    id: id + 1,
    day: item
  }));

  const rest = numberOfDays % days.length 
  if (rest == 0) {
    printMessage(weekDay, numberOfDays, weekDay)
    return weekDay
  }

  const [startingDay] = days.filter(item => item.day == weekDay)

  if (startingDay.id + numberOfDays <= days.length) {
    const day = days[startingDay.id + numberOfDays -1]
    printMessage(weekDay, numberOfDays, day.day)
    return day
  }

  const resultIndex = (rest + startingDay.id - 1) % days.length
  if (resultIndex == 0) {
    printMessage(weekDay, numberOfDays, days[0].day)
    return days[0]
  }

  printMessage(weekDay, numberOfDays, days[resultIndex].day)
}

solution('Tue', 1); //wed
solution('Tue', 2); //Thu
solution('Tue', 3); //Fri
solution('Tue', 4); //Sat
solution('Tue', 5); //Sun
solution('Wed', 1); //Thu
solution('Sat', 1); //Sun
solution('Fri', 1); //Sat
console.log("semanas pra frent");
solution('Fri', 5); //Wed
solution('Sat', 2); //Mon
solution('Tue', 6); //Mon
solution('Tue', 7); //Tue
solution('Tue', 8); //Wed
solution('Tue', 8); //Wed
solution('Tue', 9); //Thu
solution('Tue', 10); //Fri
solution('Tue', 11); //Sat
solution('Tue', 12); //Sun
solution('Tue', 13); //Mon
solution('Tue', 14); //Tue

console.log("3 semanas pra frent");
solution('Tue', 21); //Tue
solution('Tue', 22); //Wed
solution('Tue', 365);

// const options = { weekday: 'long' };
// const date = new Date("2020/03/20");
// console.log(`Day of week: ${date.toLocaleDateString('en-US', options)}`);