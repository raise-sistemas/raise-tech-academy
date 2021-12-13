export const minify = (raw) => {
  return raw.replace(/\n/g, "").replace(/(>\s*<)/g, "><");
}