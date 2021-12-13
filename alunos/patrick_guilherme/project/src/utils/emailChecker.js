export function emailChecker (email) {
  Object.values(localStorage).forEach(element => {
    const user = JSON.parse(element)

    if (user.email === email) {
      return true
    }
    else {
      return false
    }
  });
}