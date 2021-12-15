import { extractor } from './extractor.js';
import { fmtDecimal } from '../fmtDecimal.js'

export function extractTaxes(chunk) {
  const match = extractor(chunk, /Tributos\sTotais.*?txtObs">(.*?)</);

  return fmtDecimal(match);
}