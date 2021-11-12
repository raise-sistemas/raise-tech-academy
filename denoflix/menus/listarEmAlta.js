import { API_KEY, BASE_URL } from '../env.js'
import { initFetch } from '../utils/initFetch.js'
import { listar } from '../menus/listar.js'
import { isAdult } from './filmesAdultos.js'

const url = `${BASE_URL}trending/movie/day?api_key=${API_KEY}`

export const listarEmAlta = () =>
  listar(url, element => {
    return isAdult(element).map(i =>
      i.map(j => {
        return {
          title: j.title,
          vote_average: j.vote_average,
          release_date: j.release_date
        }
      })
    )
  })
