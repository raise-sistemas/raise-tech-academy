import { API_KEY, BASE_URL } from '../env.js'

export async function listarEmAlta() {
  const url = `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  const resposta = await fetch(url)
  const json = await resposta.json()
  const emAlta = json.results.map(emAlta => emAlta.title)

  console.table(emAlta)
  return emAlta
}

listarEmAlta()
