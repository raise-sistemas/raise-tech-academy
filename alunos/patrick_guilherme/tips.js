export function tips (word) {

  function classWord() {
    const url = `https://significado.herokuapp.com/${word}`
    const response = await fetch(url)
    const json = await response.json()
    return json[0].class
  }

  function syllablesCount() {
      const url = `https://significado.herokuapp.com/syllables/${word}`
      const response = await fetch(url)
      const json = await response.json()
      return json.syllablesCount 
  } 

  function etymology() {
    const url = `https://significado.herokuapp.com/${word}`
    const response = await fetch(url)
    const json = await response.json()
    return json[0].etymology      
  } 

  const number = Math.round(Math.random(1,3))

  return [classWord(), syllablesCount(), etymology()]
}

tips()