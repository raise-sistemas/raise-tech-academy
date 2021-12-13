import { minify } from './minify.js'
import { chunkRaw } from './chunkRaw.js'
import { company } from './company.js'

export const parse = (nfe) => {
  const min = minify(nfe);
  const chunkedNfe = chunkRaw(min);
  
  const parsed = {
    company: company(chunkedNfe.company)
  }

  return parsed;
}