import { extractor } from "./extractor.js"

export function extractSeries(html) {
  const match = extractor(html, /Série:.*?>(.*?)</);

  return parseInt(match);
}