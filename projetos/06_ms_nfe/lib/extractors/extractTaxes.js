import { extractor } from './extractor.js';
import { fmtDecimal } from '../fmtDecimal.js'

export function extractTaxes(html) {
  const raw = extractor(html, /Tributos\sTotais.*?txtObs">(.*?)</);

  return fmtDecimal(raw);
}