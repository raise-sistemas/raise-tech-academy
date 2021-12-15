import { extractor } from "./extractor.js"

export function extractSeries(html) {
  const raw = extractor(html, /Série:.*?>(.*?)</);

  return parseInt(raw);
}