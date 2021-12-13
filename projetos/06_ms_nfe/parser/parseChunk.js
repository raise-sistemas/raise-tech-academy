export const parseChunk = (chunk, pattern) => {
  return pattern.exec(chunk)[1];
}