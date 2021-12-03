import { useState, useEffect } from 'react';
import { useRouting } from './hooks/useRouting';
import { Routes } from './Routes';

export function Router() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    window.addEventListener('popstate', () => {
      setPath(window.location.pathname);
    });
  });

  return (
    <>
      <h1>Navbar</h1>
      <div>
        {Routes[path] ? Routes[path] : <div>Página não encontrada.</div>}
      </div>
    </>
  );
}
