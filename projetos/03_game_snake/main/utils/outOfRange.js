import { indexes } from '../assets/indexes.js'

export function outOfRange(item) {
  const finder = indexes.find(element => element == item)
  return Boolean(finder)
}
