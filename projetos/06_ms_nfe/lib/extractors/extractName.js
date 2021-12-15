import { extractor } from "./extractor.js";

export function extractName(html) {
  return extractor(html, /Nome:.*?>(.*?)</).trim();
}