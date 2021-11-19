export const pipe = (val) => (...fns) => fns.reduce(async (prev, fn) => fn(await prev), val)
