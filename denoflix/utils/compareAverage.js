export const compareAverage = (a, b) => {
  if(a.vote_average < b.vote_average) {
    return 1
  } else if(a.vote_average > b.vote_average) {
    return -1
  }
  return 0
}