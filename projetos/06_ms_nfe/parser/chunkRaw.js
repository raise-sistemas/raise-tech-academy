import companyPattern from '../stringPatterns/companyPattern.js'
import purchaseInfoPattern from '../stringPatterns/purchaseInfoPattern.js'
import purchaseListPattern from '../stringPatterns/purchaseListPattern.js' 

export const chunkRaw = (str) => {
  return {
    company: companyPattern.exec(str)[1],
    purchaseInfo: purchaseInfoPattern.exec(str)[1],
    purchaseList: purchaseListPattern.exec(str)[1],
  }
};