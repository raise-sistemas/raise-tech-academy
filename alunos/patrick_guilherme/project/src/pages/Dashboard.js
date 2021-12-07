import { onNavigate } from '../utils/onNavigate.js'

export function Dashboard() {
  return (
    <>
      <h1>Página Home</h1>
      <button onClick={() => onNavigate('/profile')}>Perfil</button>
      <button onClick={() => onNavigate('/settings')}>Configurações</button>
    </>
  )
}
