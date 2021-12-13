import { onNavigate } from '../utils/onNavigate.js'
import { emailChecker } from '../utils/emailChecker.js'
import { passwordChecker } from '../utils/passwordChecker.js'

function login() {
  let email = document.querySelector('.email').value
  let password = document.querySelector('.password').value

  if (emailChecker(email) && passwordChecker(password)) {
    onNavigate('/profile')
  }
  else {
    email = ''
    password = ''
    alert('Usuário ou senha incorretos')
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
