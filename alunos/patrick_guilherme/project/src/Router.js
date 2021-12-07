import { useState, useEffect } from 'react'
import { Routes } from './Routes'

export function Router() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    window.addEventListener('popstate', () => {
      setPath(window.location.pathname)
    })
  })

  return Routes[path] ? Routes[path] : <div>Página não encontrada</div>
}
