export const meetingsRooms = (meetings) => {
  if (meetings.length === 0) return 0


  const events = []
  for (const [begin, end] of meetings) {
    events.push([begin, 1])
    events.push([end, -1])
  }
  events.sort((a, b) => a[0] - b[0] || a[1] - b[1])
  console.log(events)

  let maxRooms = 0;
  let current = 0;
  for (const [, delta] of events) {
    current += delta
    maxRooms = Math.max(maxRooms, current)
  }

  return maxRooms;
}