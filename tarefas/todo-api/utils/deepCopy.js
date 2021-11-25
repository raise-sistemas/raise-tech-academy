export function deepCopy(obj) {
  if(typeof obj !== "object" || obj === null) return obj;

  const newObject = Array.isArray(obj) ? [] : {};

  for(let key in obj) {
    const value = obj[key]

    newObject[key] = deepCopy(value);
  }

  return newObject;
}