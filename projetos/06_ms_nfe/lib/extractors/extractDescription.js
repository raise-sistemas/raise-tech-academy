import { extractor } from './extractor.js'

export function extractDescription(html) {
  const pattern = /Informações\sgerais\sda\sNota.*?<strong>(.*?)</;

  return extractor(html, pattern);
}