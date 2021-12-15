export function slugGenerate(base = 36){
  return Math.random().toString(base).replace(/[^a-z]+/g, '').substr(0, 5)
};