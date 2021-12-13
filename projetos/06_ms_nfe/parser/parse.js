import { minify } from './minify.js'
import { chunkRaw } from './chunkRaw.js'
import { companyName } from './chunks/companyName.js'
import { cnpj } from './chunks/cnpj.js'
import { adress } from './chunks/adress.js'

export const parse = (nfe) => {
  const min = minify(nfe);
  const chunkedNfe = chunkRaw(min);
  
  const parsed = {
    company: {
      name: companyName(chunkedNfe.company),
      cnpj: cnpj(chunkedNfe.company),
      adress: adress(chunkedNfe.company),
    }
  }

  return parsed;
}