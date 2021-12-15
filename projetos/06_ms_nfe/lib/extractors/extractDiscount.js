import { extractor } from './extractor.js';
import { fmtDecimal } from '../fmtDecimal.js'

export function extractDiscount(chunk) {
  const match = extractor(chunk, /Descontos.*?totalNumb">(.*?)</);

  return fmtDecimal(match) || 0;
}