import { useContext } from 'react';
import { ThemeContext } from './store/ThemeContext.js';

export function Page() {
  const { colorMode, toggleColorMode } = useContext(ThemeContext);

  return (
    <div className='App'>
      <header
        className='App-header'
        style={{
          background: colorMode.background,
          color: colorMode.foreground,
        }}
      >
        <p>Essa página possui contexto global.</p>
        <button onClick={toggleColorMode}>Dark Mode</button>
      </header>
    </div>
  );
}
