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

function toTitleCase(str) {
  const arr = str.split(" ")
  const titledArr = arr.map(word => 
    word.charAt(0).toUpperCase() + word.slice(1))

  return titledArr.join(" ")
}

