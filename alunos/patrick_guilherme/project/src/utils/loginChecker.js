export function loginChecker(email, password) {
  const users = []
  Object.values(localStorage).forEach(element => {
    try {
      const user = JSON.parse(element)
      users.push(user)
    } catch {}
  })

  let finder = ''

  for (let i = 0; i < users.length; i++) {
    const element = users[i]
    if (element.email === email && element.password === password) {
      finder = true
      break
    }
  }

  if (finder) {
    return true
  } else {
    return false
  }
}
