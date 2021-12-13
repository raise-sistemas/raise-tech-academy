import { onNavigate } from '../utils/onNavigate.js'
import { getName } from '../utils/getName'

export function Profile() {

  return (
    <>
    <h1>Olá, {getName()}</h1>
      <button onClick={() => onNavigate('/')}>Página inicial</button>
      <button onClick={() => onNavigate('/settings')}>Configurações</button>
    </>
  )
}
