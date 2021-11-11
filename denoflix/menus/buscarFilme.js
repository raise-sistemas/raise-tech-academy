import { API_KEY, BASE_URL, LANG } from "../env.js"
import { listar } from "../menus/listar.js"

export const buscarFilme = () => {
    const escolha = prompt("---digite o filme que deseja pesquisar---\n")
    const url = `${BASE_URL}search/movie?api_key=${API_KEY}&language=${LANG}&query=${escolha}`
    
    return listar(url,(result)=> result.map(result => {
        return {
                title: result.title,      
                original_language: result.original_language,
                release: result.release_date,
                average: result.vote_average,
        }   
    }))
}
