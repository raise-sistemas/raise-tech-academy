import { onNavigate } from '../utils/onNavigate.js'

export function ProfileLogin() {
  if (localStorage.Users) {
    return onNavigate('/profile')
  } else {
    return onNavigate('/login')
  }
}
