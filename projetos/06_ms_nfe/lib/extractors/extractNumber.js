import { extractor } from './extractor.js';

export function extractNumber(html) {
  const raw = extractor(html, /Número:.*?>(.*?)</);

  return parseInt(raw);
}