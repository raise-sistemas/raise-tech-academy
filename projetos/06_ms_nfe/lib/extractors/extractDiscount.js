import { extractor } from './extractor.js';
import { fmtDecimal } from '../fmtDecimal.js'

export function extractDiscount(html) {
  const raw = extractor(html, /Descontos.*?totalNumb">(.*?)</);

  return fmtDecimal(raw) || 0;
}