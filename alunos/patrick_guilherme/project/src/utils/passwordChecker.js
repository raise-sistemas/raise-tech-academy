export function passwordChecker(password) {
  Object.values(localStorage).forEach(element => {
    const user = JSON.parse(element)

    // eslint-disable-next-line eqeqeq
    if (user.password == password) {
      return true
    } else {
      return false
    }
  })
}
