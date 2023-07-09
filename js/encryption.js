// https://www.hackerrank.com/challenges/encryption/problem?isFullScreen=true
function encryption(s) {
  const str = s.replace(/\s/g, '');
  const lines = Math.floor(Math.sqrt(str.length));
  const maxColumns = lines + 1
  const matrix = [];
  let startIndex = 0;

  for (let i = 0; i <= lines; i++) {
    const wordArr = str.slice(startIndex, startIndex + maxColumns).split('')
    matrix.push(wordArr);
    startIndex += maxColumns;
  }

  let res = '';
  for (let i = 0; i <= maxColumns; i++) {
    for (let j = 0; j <= lines; j++) {
      res += matrix[j][i] || '';
    }
    res += ' ';
  }

  return res
}

// console.log(encryption('if man was meant to stay on the ground god would have given us roots'));
// console.log(encryption('haveaniceday'));
// console.log(encryption('chillout')) //clu hlt io
const res = encryption('wclwfoznbmyycxvaxagjhtexdkwjqhlojykopldsxesbbnezqmixfpujbssrbfhlgubvfhpfliimvmnny')
console.log(res === 'wmgjpnull cyjqlejgi lyhhdzbui wctlsqsbm fxeoxmsvv ovxjeirfm zadysxbhn nxkkbffpn bawobphfy')