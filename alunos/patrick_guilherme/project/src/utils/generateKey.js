export function generateKey(len) {
  const characters = 'abcdeefghijklmnopqrstuvwxyz1234567890!@#$%¨&*()_+'
  let key = ''
  for (let i = 0; i < len; i++) {
    key += characters[Math.round(Math.random() * characters.length - 1)]
  }
  return key
}