import { extractor } from "./extractor.js"

export function extractIssuedIn(html) {
  const match = extractor(html, /Emissão:.*?>(.*?)\s-/);
  
  const splited = match.split(" ");

  return {
    date: splited[0],
    time: splited[1]
  }
}