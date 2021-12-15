import { extractor } from "./extractor.js";

export function extractProtocol(html) {
  const raw = extractor(html, /Protocolo de Autorização:.*?>(.*?)</);

  const [ protocolNumber, date, time ] = raw.split(" ").filter(elem => elem !== "");
  
  return {
    protocolNumber,
    date,
    time
  }
}