import { BASE_URL } from "../env.js" 
export const tips = async (word) => {
  const responses = []

  responses.push(fetch(`${BASE_URL}${word}`)
    .then(response => response.json())
    .then(json => Promise.resolve(...json))
    .catch(e => console.log(e))
    
  )
  responses.push(fetch(`${BASE_URL}synonyms/${word}`)
    .then(response => response.json())
    .then(json => Promise.resolve(json))
    .catch(e => console.log(e))
  )

  const results = await Promise.all(responses)
  return {
    class: results[0].class,
    synonyms: results[1]
  }
}
