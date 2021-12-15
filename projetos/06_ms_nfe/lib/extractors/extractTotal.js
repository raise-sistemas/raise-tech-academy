import { extractor } from './extractor.js'
import { fmtDecimal } from '../fmtDecimal.js'

export function extractTotal(html) {
  const raw = extractor(html, /Valor\stotal.*?totalNumb">(.*?)</);
  
  return fmtDecimal(raw);
}