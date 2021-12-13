export function passwordChecker(password) {
  const users = []
  Object.values(localStorage).forEach(element => {
    try {
      const user = JSON.parse(element)
      users.push(user)
    } catch {}
  })

  let finder = ''
  let index = ''

  for (let i = 0; i < users.length; i++) {
    const element = users[index];
    if (element.password === password) {
      finder = true
      index = i
      break
    }
  }

  if (finder) {
    return true
  } else {
    return false
  }
}
