function findNextSquare(x) {
  let square = Math.sqrt(x);
  if (Number.isInteger(square)) {
    square+=1;
    return Math.pow(square,2);
  }
  else {
    return -1;
  }
  return Math.sqrt(x);
}