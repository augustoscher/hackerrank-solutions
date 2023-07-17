function taumBday(b, w, bc, wc, z) {
  let costBlack = bc;
  let costWhite = wc;
  if (bc + z < wc) costWhite = bc + z;
  if (wc + z < bc) costBlack = wc + z;
  return costBlack * b + costWhite * w;
}

console.log()