import { extractor } from "./extractor.js";

export function extractKey(html) {
  return extractor(html, /class="chave">(.*?)</);
}