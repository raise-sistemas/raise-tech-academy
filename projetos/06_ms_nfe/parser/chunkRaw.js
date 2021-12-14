import { storePattern } from '../stringPatterns/storePattern.js'
import { purchaseInfo } from '../stringPatterns/purchaseInfoPattern.js'
import { productsPattern } from '../stringPatterns/productsPattern.js' 

export const chunkRaw = (html) => {
  return {
    company: html.match(storePattern)[1],
    purchaseInfo: html.match(purchaseInfo)[1],
    purchaseList: html.match(productsPattern)[1],
  }
};