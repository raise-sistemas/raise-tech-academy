import { extractor } from './extractor.js'
import { fmtDecimal } from '../fmtDecimal.js'

export function extractTotal(chunk) {
  const match = extractor(chunk, /Valor\stotal.*?totalNumb">(.*?)</);
  
  return fmtDecimal(match) || "";
}