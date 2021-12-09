import { onNavigate } from '../utils/onNavigate.js'
import { ProfileLogin } from '../utils/profile-login.js'

export function Dashboard() {
  return (
    <>
      <h1>Página Home</h1>
      <button onClick={ProfileLogin}>Perfil</button>
      <button onClick={() => onNavigate('/settings')}>Configurações</button>
      <button onClick={() => console.log(typeof localStorage.Users)}>teste</button>
    </>
  )
}
