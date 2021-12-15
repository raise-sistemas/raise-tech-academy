import { extractor } from './extractor.js'

export function extractDescription(html) {
  return extractor(html, /Informações\sgerais\sda\sNota.*?<strong>(.*?)</);
}