import { onNavigate } from '../utils/onNavigate.js'

export function Login() {
  return (
    <>
      <h1>Login</h1>
      <label>email: </label>
      <input />
      <br></br>
      <label>senha: </label>
      <input type="password" />
      <br></br>
      <br></br>
      <button onClick={() => onNavigate('/profile')}>login</button>
    </>
  )
}
