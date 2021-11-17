import { initFetch } from '../utils/initFetch.js'

// Função Auxiliar
const toTitleCase = (str) => {
  const arr = str.split(" ")
  const titledArr = arr.map(word => 
    word.charAt(0).toUpperCase() + word.slice(1))

  return titledArr.join(" ")
}

//Implementação apenas com async/await
/*
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
*/

// Implementação com Promises 
/*
export const listar = (url, init = 1, end = init) => (callback) => {
  const result = []
  for (let current = init; current <= end; current++) {
    const curl = url + `&page=${current}`
    result.push(initFetch(curl)
    .then(page => Promise.resolve(page.results))
    .catch(err => console.log(err))
    )
  }

  return Promise.all(result)
    .then((arr) => {
      const data = callback(arr.flat())
      for(const entry in data) {
        if(data[entry]?.length && Array.isArray(data[entry])) {
          console.log(toTitleCase(entry.replace("_"," ")))
          console.table(data[entry])
        }
      }
    })
    .catch(err => console.log(err))
}
*/
// Implementação mais otimizada
export const listar = (url, init = 1, end = init) => async (callback) => {
  const result = []
  for (let current = init; current <= end; current++) {
    const curl = url + `&page=${current}`
    result.push(initFetch(curl)
    .then(page => Promise.resolve(page.results))
    .catch(err => console.log(err))
    )
  }

  const arr = await Promise.all(result)
  const data = callback(arr.flat())

  for(const entry in data) {
    if(data[entry]?.length && Array.isArray(data[entry])) {
      console.log(toTitleCase(entry.replace("_"," ")))
      console.table(data[entry])
    }
  }

}

