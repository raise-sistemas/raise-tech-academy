import { useState, useEffect } from 'react';

export function useRouting() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    window.addEventListener('popstate', () => {
      setPath(window.location.pathname);
    });
  });

  return path;
}
