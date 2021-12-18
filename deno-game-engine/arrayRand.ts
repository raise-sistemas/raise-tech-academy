export function arrayRand<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}
