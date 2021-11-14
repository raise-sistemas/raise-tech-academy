import { compareAverage } from "./compareAverage.js"

export const rank = (results) => {
  return  {
    top_rated: results
      .filter(entry => 8 <= entry.vote_average)
      .sort(compareAverage),

    good: results
      .filter(entry => 6 <= entry.vote_average && entry.vote_average < 8)
      .sort(compareAverage),

    average: results
      .filter(entry => 4 <= entry.vote_average && entry.vote_average < 6)
      .sort(compareAverage),
      
    awlful: results
      .filter(entry => 0 < entry.vote_average && entry.vote_average< 4)
      .sort(compareAverage),
      
    no_votes: results
      .filter(entry => entry.vote_average === 0)
    };
}