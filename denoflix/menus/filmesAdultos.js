export function isAdult(array) {
  const adult = []
  const notAdult = []

  array.forEach(element => {
    if (element.adult) {
      adult.push(element)
    } else {
      notAdult.push(element)
    }
  })

  return [notAdult, adult]
}

