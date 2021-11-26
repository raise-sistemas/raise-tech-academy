export function tips(gramaticalClass, synonymsArr) {
  let tipsStr = 
  `
  Dicas:
  
  Classe gramatical: ${gramaticalClass}
  `
  
  if (synonymsArr) {
    const count = Math.min(5, synonymsArr.length);
    const synonyms = synonymsArr.slice(0, count);
    const synonymsStr = synonyms.join(" \| ");

    tipsStr += 
    `
  Sinônimos: ${synonymsStr}
    `
  }

  return tipsStr;
}