import { API_KEY, BASE_URL } from '../env.js'
import { initFetch } from '../utils/initFetch.js'

export async function listarEmAlta() {
  const url = `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  const json = await initFetch(url)
  const emAlta = json.results.map(emAlta => emAlta.title)

  console.table(emAlta)
  return emAlta
}

listarEmAlta()
