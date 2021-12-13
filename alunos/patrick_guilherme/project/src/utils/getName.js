export function getName(email) {
  const users = Object.values(localStorage)
  let name = ''

  for (let i = 0; i < users.length - 1; i++) {
    try {
      let user = JSON.parse(users[i])
      if (user.email === email) {
        name = user.name
        break
      }
    } catch {}
  }

  return name
}
