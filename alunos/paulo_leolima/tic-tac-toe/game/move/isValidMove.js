export function isValidMove(row, col) {
  if (
    (row === 0 || row === 1 || row === 2) &&
    (col === 0 || col === 1 || col === 2)
  ) {
    return true;
  } else {
    return false;
  }
}