import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

export default function ThemeSwitcher(props) {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleThemeChange() {
    setTheme(theme === 'light' ? 'dark' : 'light')
    props.onThemeChange(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <button onClick={() => handleThemeChange()}>
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
}

