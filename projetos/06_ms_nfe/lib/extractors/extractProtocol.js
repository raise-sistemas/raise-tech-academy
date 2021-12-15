import { extractor } from "./extractor.js";

export function extractProtocol(html) {
  const match = extractor(html, /Protocolo de Autorização:.*?>(.*?)</);

  const [ protocolNumber, date, time ] = match.split(" ").filter(elem => elem !== "");
  
  return {
    protocolNumber,
    date,
    time
  }
}