import { extractor } from './extractor.js';

export function extractNumber(html) {
  const match = extractor(html, /Número:.*?>(.*?)</);

  return parseInt(match);
}