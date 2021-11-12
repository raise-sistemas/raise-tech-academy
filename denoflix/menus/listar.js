/* 
  A função listar recebe como argumentos obrigatórios a url(sem paginação), uma callback
  e dois parametros opcionais de paginação init e end definem a primeira e a última página
  a ser chamada.
  A callback recebe como parametro um array de objetos resultante da chamada da API
  e deve retornar um array(ou matriz para múltiplas tabelas) de objetos com apenas os
  dados que se deseja imprimir no console.table como atributos.
  Exemplo de implementação em menus/listarCartaz.js
   
*/

export async function listar(url, callback, init = 1, end = init) {
  //
  const result = []

  for (let current = init; current <= end; current++) {
    const curl = url + `&page=${current}`
    const res = await fetch(curl)
    const json = await res.json()
    result.push(...json.results)
  }

  const data = callback(result)

  if (!data[0][0]) {
    console.table(data)
  } else {
    data.forEach(element => {
      if (element.length) console.table(element)
    })
  }
}
