import { API_KEY, BASE_URL, LANG } from "../env.js"
import { listar } from "../menus/listar.js"
import { formatDate } from "../utils/formatDate.js"
import { compareAverage } from "../utils/compareAverage.js"

export const buscarFilme = () => {
    const escolha = prompt("---digite o filme que deseja pesquisar---\n")
    const url = `${BASE_URL}search/movie?api_key=${API_KEY}&language=${LANG}&query=${escolha}&include_adult=true`
    
    return listar(url, (result) => {
        return {
            search_result: result.map(entry => {
                return {
                    title: entry.title, 
                    original_language: entry.original_language,
                    vote_average: entry.vote_average,
                    release_date: formatDate(entry.release_date)
                }   
            }).sort(compareAverage)
        }
    })
}
