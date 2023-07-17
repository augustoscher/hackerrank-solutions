// https://www.hackerrank.com/challenges/library-fine/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign&h_r=next-challenge&h_v=zen
function libraryFine(d1, m1, y1, d2, m2, y2) {
  if (y1 > y2) return 10000;
  else if (y1 < y2) return 0;
  else if (m1 > m2) return 500 * (m1 - m2);
  else if (m1 < m2) return 0;
  else if (d1 > d2) return 15 * (d1 - d2);
  else return 0;
}

console.log(libraryFine(9, 6, 2015, 6, 6, 2015)) //45