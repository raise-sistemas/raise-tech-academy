import { extractor } from './extractor.js';
import { fmtDecimal } from '../fmtDecimal.js'

export function extractFinalAmount(html) {
  const raw = extractor(html, /Valor\sa\spagar.*?txtMax">(.*?)</);

  return fmtDecimal(raw);
}