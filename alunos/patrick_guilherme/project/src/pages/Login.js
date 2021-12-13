import { onNavigate } from '../utils/onNavigate.js'

function login() {
  const email = document.querySelector('.email').value
  const users = JSON.parse(localStorage.Users)
  const emailFinder = users.find(item => item.email === email)

  if (emailFinder) {
    return onNavigate('/profile')
  } else {
    return {}
  }
}

export function Login() {
  return (
    <>
      <h1>Login</h1>
      <label>email: </label>
      <input type="email" class="email" />
      <br></br>
      <label>senha: </label>
      <input type="password" class="password" />
      <br></br>
      <br></br>
      <button onClick={login}>Sign In</button>
      <button onClick={() => onNavigate('/signup')}>Sign Up</button>
      <button onClick={() => onNavigate('/')}>Página inicial</button>
    </>
  )
}
