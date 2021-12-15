import { extractor } from "./extractor.js";

export function extractCpf(html) {
  return extractor(html, /CPF:.*?>(.*?)</).trim();
}