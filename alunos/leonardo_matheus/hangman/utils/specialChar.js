export const specialChar = (str) => {
  return str
    .replace(/Ã|Â|Á|À/, "A")
    .replace(/Õ|Ô|Ò|Ó/, "O")
    .replace(/Ũ|Û|Ú|Ù|Ü/, "U")
    .replace(/Í|Ì|Ĩ|Î/, "I")
    .replace(/Ç/,"C")
}