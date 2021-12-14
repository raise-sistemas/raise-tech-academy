import { minify } from './minify.js'
import { chunkRaw } from './chunkRaw.js'
import { company } from './company.js'
import { purchaseList } from './purchaseList.js'

export const parse = async (nfe) => {
  const min = minify(nfe);
  const chunkedNfe = chunkRaw(min);

  return {
    company: company(chunkedNfe.company),
    products: await purchaseList(chunkedNfe.purchaseList)
  }

}