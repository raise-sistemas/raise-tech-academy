export function isValidMove(pos) {
  if (
    pos === 0 ||
    pos === 1 ||
    pos === 2 ||
    pos === 3 ||
    pos === 4 ||
    pos === 5 ||
    pos === 6 ||
    pos === 7 ||
    pos === 8
  ) {
    return true;
  } else {
    return false;
  }
}
