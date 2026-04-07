import { meetingsRooms } from './index'

describe('meetingsRooms', () => {
  // it('should return zero rooms', () => {
  //   const meetings = []
  //   const result = meetingsRooms(meetings)
  //   expect(result).toBe(0)
  // })

  // it('should return a single room', () => {
  //   const meetings = [[0, 15]]
  //   const result = meetingsRooms(meetings)
  //   expect(result).toBe(1)
  // })

  // it('should return the correct result', () => {
  //   const meetings = [
  //     [0, 30],
  //     [5, 10],
  //     [15, 20]
  //   ]
  //   const result = meetingsRooms(meetings)
  //   expect(result).toBe(2)
  // })

  it('should return the correct result with unordered meetings', () => {
    const meetings = [
      [15, 20],
      [0, 30],
      [5, 10]
    ]
    const result = meetingsRooms(meetings)
    expect(result).toBe(2)
  })

  // it('should return 4 rooms', () => {
  //   const meetings = [
  //     [15, 20],
  //     [15, 20],
  //     [15, 20],
  //     [15, 20]
  //   ]
  //   const result = meetingsRooms(meetings)
  //   expect(result).toBe(4)
  // })
})
