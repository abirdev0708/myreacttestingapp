import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

export default function ThemeSwitcher(props) {
  const context = useContext(ThemeContext);
  const theme = context?.theme || 'light';
  const setTheme = context?.setTheme;

  function handleThemeChange() {
      setTheme(theme === 'light' ? 'dark' : 'light');
    
  }
  return (
    <button onClick={handleThemeChange}>
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
}

