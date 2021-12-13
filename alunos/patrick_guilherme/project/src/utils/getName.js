export function getName() {
  const currentUser = sessionStorage.currentUser
  const users = Object.values(localStorage)
  let name = ''
  for (let index = 0; index < users.length; index++) {
    try {
      const element = JSON.parse(users[index])
      if (currentUser === element.email) {
        name = element.name
      }
    } catch {}
  }
  return name
}
