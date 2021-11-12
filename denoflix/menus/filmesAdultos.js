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

  return adult, notAdult
}


// import { API_KEY, BASE_URL } from '../env.js'
// import { initFetch } from '../utils/initFetch.js'
// // import { listar } from '../menus/listar.js'

// export async function isAdult() {
//   const url = `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
//   const response = await initFetch(url)
//   const adult = []

//   response.results.forEach(element => {
//     if (element.adult) {
//       adult.push(element)
//       console.log(element.adult)
//     }
//   })

//   return adult
// }

// isAdult()

