export const pipe = (val) => (...fns) => fns.reduce((prev, fn) => fn(prev), val)
