export function extractor(str, pattern) {
  return pattern.exec(str)?.[1] || "";
}