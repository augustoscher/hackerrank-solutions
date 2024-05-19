const events = [
  'timestamp=2023-09-27T00:00:00.000Z domain=example.com srcHost=192.168.0.1',
  'timestamp=2023-09-27T03:00:00.000Z domain=example.com srcHost=192.168.0.1',
  'timestamp=2023-09-27T07:00:00.000Z domain=example.com srcHost=192.168.0.1',
  'timestamp=2023-09-27T10:00:00.000Z domain=example.com srcHost=192.168.0.1',
  'timestamp=2023-09-27T17:00:00.000Z domain=example.com srcHost=192.168.0.1',
  'timestamp=2023-09-27T18:00:00.000Z domain=example.org srcHost=192.168.0.1',
  'timestamp=2023-09-27T18:00:00.000Z domain=example.org srcHost=192.168.0.2',
  'timestamp=2023-09-27T18:00:00.000Z domain=example.org srcHost=192.168.0.3',
  'timestamp=2023-09-27T18:00:00.000Z domain=example.org srcHost=192.168.0.4',
  'timestamp=2023-09-27T18:00:00.000Z domain=example.org srcHost=192.168.0.5',
  'timestamp=2023-09-28T00:00:00.000Z domain=example.com srcHost=192.168.0.1',
  'timestamp=2023-09-28T08:00:00.000Z domain=example.com srcHost=192.168.0.1',
  'timestamp=2023-09-27T00:00:00.000Z domain=example.com userID=1',
  'timestamp=2023-09-27T00:00:00.001Z domain=example.com userID=2',
  'timestamp=2023-09-27T00:00:00.020Z domain=example.com userID=3',
  'timestamp=2023-09-27T00:00:00.300Z domain=example.com userID=4',
  'timestamp=2023-09-27T00:00:00.400Z domain=example.com userID=5',
  'timestamp=2023-09-27T00:00:00.500Z domain=example.com userID=6',
  'timestamp=2023-09-27T00:00:00.600Z domain=example.com userID=7',
  'timestamp=2023-09-27T00:20:00.000Z domain=bar.example.net userID=11',
  'timestamp=2023-09-27T00:21:00.000Z domain=bar.example.net userID=11',
  'timestamp=2023-09-27T01:00:00.000Z domain=foo.example.org userID=1',
  'timestamp=2023-09-27T08:00:00.000Z domain=foo.example.org userID=2',
  'timestamp=2023-09-27T15:00:00.000Z domain=foo.example.org userID=8'
]

const parsedEvents = events.map((event) => {
  const obj = event.split(' ').reduce((acc, item) => {
    const [k, v] = item.split('=')
    return {
      ...acc,
      [k]: v
    }
  }, {})
  return obj
})

const commonEvents = parsedEvents.reduce((acc, event) => {
  acc[event.domain] = acc[event.domain]
    ? {
        ...acc[event.domain],
        srcHosts: event.srcHost
          ? acc[event.domain].srcHosts.add(event.srcHost)
          : acc[event.domain].srcHosts,
        userIDs: event.userID
          ? acc[event.domain].userIDs.add(event.userID)
          : acc[event.domain].userIDs
      }
    : {
        timestamp: event.timestamp,
        srcHosts: event.srcHost ? new Set().add(event.srcHost) : new Set(),
        userIDs: event.userID ? new Set().add(event.userID) : new Set()
      }
  return acc
}, {})

const res = Object.keys(commonEvents)
  .map((key) => ({
    domain: key,
    isCommonSrcHostOrUserID:
      commonEvents[key].srcHosts.size >= 5 ||
      commonEvents[key].userIDs.size >= 5
  }))
  .filter(({ isCommonSrcHostOrUserID }) => isCommonSrcHostOrUserID)
  .map(({ domain }) => domain)

console.log(res)
