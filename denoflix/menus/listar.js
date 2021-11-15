import { initFetch } from '../utils/initFetch.js'

export const listar = (url, init = 1, end = init) => async (callback) => {
  const result = []

  for (let current = init; current <= end; current++) {
    const curl = url + `&page=${current}`
    const json = await initFetch(curl)
    result.push(...json.results)
  }

  const data = callback(result)
  
  for(const entry in data) {
    if(data[entry]?.length && Array.isArray(data[entry])) {
      console.log(toTitleCase(entry.replace("_"," ")))
      console.table(data[entry])
    }
  }
  
}

// Função Auxiliar
function toTitleCase(str) {
  const arr = str.split(" ")
  const titledArr = arr.map(word => 
    word.charAt(0).toUpperCase() + word.slice(1))

  return titledArr.join(" ")
}


// Implementação com Promises(não funcionando da maneira esperada)

/*
export const listar = (url, init = 1, end = init) => (callback) => {
  getPages(url, init, end)
    .then(arr => callback(arr))
    .then(movies => {
      for(const entry in movies) {
        if(movies[entry]?.length && Array.isArray(movies[entry])) {
          console.log(toTitleCase(entry.replace("_"," ")))
          console.table(movies[entry])
        }
      }
    }).catch(err => console.log(e))
    
}


function getPage(url) {
  return new Promise(resolve => {
    fetch(url)
      .then(rawData => {
        if(!rawData) throw "Erro ao requisitar os dados da API"
        return rawData.json()
      })
      .then(page => resolve(...page.results))
  })
}

function getPages(url, init, end) {
  const pages = []
  for (let current = init; current <= end; current++) {
    const curl = url + `&page=${current}`
    pages.push(getPage(curl))
  }
  return Promise.allSettled(pages)

}
*/
