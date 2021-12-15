import { extractor } from './extractor.js';
import { fmtDecimal } from '../fmtDecimal.js'

export function extractFinalAmount(chunk) {
  const match = extractor(chunk, /Valor\sa\spagar.*?txtMax">(.*?)</);

  return fmtDecimal(match);
}