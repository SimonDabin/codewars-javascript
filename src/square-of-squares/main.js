const isSquare = function(n) {
  if (n > 0 || n == 0) {
    return Number.isInteger(Math.sqrt(n));
  } else {
    return false;
  }
};

export default isSquare;
