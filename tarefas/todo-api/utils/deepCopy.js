export function deepCopy(obj) {
  if (typeof obj !== "object" || obj === null) return obj;

  const newObject = Array.isArray(obj) ? [] : {};
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of#difference_between_for...of_and_for...in
  for (let key in obj) {
    const value = obj[key];

    newObject[key] = deepCopy(value);
  }

  return newObject;
}

export function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
