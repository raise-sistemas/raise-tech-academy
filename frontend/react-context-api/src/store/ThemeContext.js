import { createContext, useState } from 'react';

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [colorMode, setColorMode] = useState(themes.light);

  const toggleColorMode = () => {
    if (colorMode === themes.light) setColorMode(themes.dark);
    else setColorMode(themes.light);
  };

  return (
    <ThemeContext.Provider value={{ colorMode, toggleColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
