import { tips } from './allTips.js'

export async function randomTip(word) {
  const allTips = await tips(word)
  const sortition = Math.round(Math.random() * (3 - 1) + 1)

  if (sortition == 1) {
    return allTips.Classe
  }
  else if(sortition == 2) {
    return `A quantidade de sílabas é: ${allTips.Sílabas}`
  }
  else {
  return allTips.Etimologia
}}

console.log(await randomTip('estratégia'))