export function tips(gramaticalClass, synonymsArr, chances) {
  
  if(chances > 3) return "";

  let tipsStr = 
  `
  Dicas:
  
  Classe gramatical: ${gramaticalClass}
  `
  
  if (chances < 2) {
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