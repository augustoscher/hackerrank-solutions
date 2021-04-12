// HackerRank - Queen's Attack II
// https://www.hackerrank.com/challenges/queens-attack-2/problem?h_r=next-challenge&h_v=zen

// Params:
// - int n: the number of rows and columns in the board
// - nt k: the number of obstacles on the board
// - int r_q: the row number of the queen's position
// - int c_q: the column number of the queen's position
// - int obstacles[k][2]: each element is an array of  integers, the row and column of an obstacle

// Returns:
// int: the number of squares the queen can attack
const queensAttack = (n, k, r_q, c_q, obstacles) => {
  let attacks = 0;
  const obs = new Set();
  obstacles.forEach(v => obs.add(v[0] + ':' + v[1])); //'4:2'

  const attack = (rowInc, colInc) => {
      let row = r_q + rowInc;
      let col = c_q + colInc;
      // test each square from the position of queen to the border
      while (row <= n && row > 0 && col <= n && col > 0) {
          if (obs.has(row + ':' + col)) return;
          attacks++;
          row += rowInc;
          col += colInc;
      }
  }

  // attack defining the direction of the queen
  attack(-1, 0); //west (esquerda) decrementa um na direção da esquerda
  attack(-1, 1); //north west (diagonal esquerda sup)
  attack(0, 1); //north (sobe)
  attack(1, 1); //north east (diagonal direita sup)
  attack(1, 0); //east (direita)
  attack(1, -1); //south east (diagonal direita inf)
  attack(0, -1); //south (desce)
  attack(-1, -1); //south west (diagonal esquerda inf)
  // N( 0,   1),
  // NE(1,   1),
  // E( 1,   0),
  // SE(1,  -1),
  // S( 0,  -1),
  // SW(-1, -1),
  // W( -1,  0),
  // NW(-1,  1);

  return attacks;
}

console.log(queensAttack(5, 3, 4, 3, [[5, 5], [4, 2],[ 2, 3]])) //10
// queensAttack(4, 0, 4, 4, []) //