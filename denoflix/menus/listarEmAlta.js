import { API_KEY, BASE_URL } from '../env.js'
import { initFetch } from '../utils/initFetch.js'
import { listar } from '../menus/listar.js'
import { isAdult } from './filmesAdultos.js'

export async function listarEmAlta() {
  const url = `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  const response = await initFetch(url)
  const movies = response.results.map(element => element.title)
  const filmes = []

  response.results.forEach(element => {
    filmes.push({
      title: element.title,
      vote_average: element.vote_average,
      release_date: element.release_date
    })
  })

  console.table(isAdult(filmes))

  return movies
}

listarEmAlta()
