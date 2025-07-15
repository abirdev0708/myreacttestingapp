import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
}

