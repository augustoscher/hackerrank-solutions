// https://www.hackerrank.com/challenges/encryption/problem?isFullScreen=true
function encryption(s) {
  const str = s.replace(/\s/g, '');

  const len = str.length;
  const sqr = Math.sqrt(len);
  let row = Math.floor(sqr);
  let col = Math.ceil(sqr);
  if (row * col < len) {
    if (row < col) row += 1
    else col += 1;
  }

  const matrix = [];
  let startIndex = 0;

  for (let i = 0; i <= row; i++) {
    matrix.push(str.slice(startIndex,startIndex+col));
    startIndex += col;
  }

  let encrypted = '';
  for(let i = 0; i < matrix[0].length; i++) { //cols
    for(let j = 0; j < matrix.length; j++) { //rows
      if (matrix[j][i] != undefined) encrypted += matrix[j][i];
    }
    encrypted += ' ';
  }

  return encrypted
}

console.log(encryption('if man was meant to stay on the ground god would have given us roots'));
console.log(encryption('haveaniceday'));
console.log(encryption('chillout')) //clu hlt io
console.log(encryption('wclwfoznbmyycxvaxagjhtexdkwjqhlojykopldsxesbbnezqmixfpujbssrbfhlgubvfhpfliimvmnny') === 'wmgjpnull cyjqlejgi lyhhdzbui wctlsqsbm fxeoxmsvv ovxjeirfm zadysxbhn nxkkbffpn bawobphfy')
