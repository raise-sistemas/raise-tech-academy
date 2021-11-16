import { API_KEY, BASE_URL, LANG } from "../env.js"

export function listarPopularesPromises() {
  
    fetch(`${BASE_URL}movie/popular?api_key=${API_KEY}&language=${LANG}`)
    
    .then(result => result)
    .then(function(query) {

        const popularMovies = query.results.map((populares) => {
            return {
                title: populares.title,
                original_title: populares.original_title,
                release_date: populares.release_date,
                adult: populares.adult
            }
        })
        
        let classAdultos = popularMovies.filter(results => results.adult)
        if (classAdultos.length === 0) {
            classAdultos = "-= Aviso: Não há filmes adultos!"
        }
        let classLivre = popularMovies.filter(results => !results.adult)
        if (classAdultos.length === 0) {
            classAdultos = "-= Aviso: Não há filmes classificação livre!"
        }
        
        console.log("-= Filmes Adultos =-")
        console.table(classAdultos)
        console.log("-= Filmes Classificação Livre =-")
        console.table(classLivre)
    })
    
    .catch(function(error) {
        console.log(error)
    })
}