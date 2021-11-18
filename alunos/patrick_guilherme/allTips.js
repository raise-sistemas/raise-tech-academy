// deno-lint-ignore-file require-await
export async function tips(word) {
  async function classWord() {
    const url = `https://significado.herokuapp.com/${word}`
    const response = await fetch(url)
    const json = await response.json()
    return json[0].class
  }

  async function syllablesCount() {
    const url = `https://significado.herokuapp.com/syllables/${word}`
    const response = await fetch(url)
    const json = await response.json()
    return json.syllablesCount
  }

  async function etymology() {
    const url = `https://significado.herokuapp.com/${word}`
    const response = await fetch(url)
    const json = await response.json()

    if (!json[0].etymology) {
      return 'Não temos etimologia para esta palavra.'
    } else {
      return json[0].etymology.replace(word, '*'.repeat(word.length))
    }
  }

  return {
    Classe: await classWord(),
    Sílabas: await syllablesCount(),
    Etimologia: await etymology()
  }
}

