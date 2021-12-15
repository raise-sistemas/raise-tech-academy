import { extractor } from "./extractor.js"

export function extractIssuedIn(html) {
  const raw = extractor(html, /Emissão:.*?>(.*?)\s-/);
  
  const splited = raw.split(" ");

  return {
    date: splited[0],
    time: splited[1]
  }
}