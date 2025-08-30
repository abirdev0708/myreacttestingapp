import { ThemeContext } from './ThemeContext';
import { useState } from 'react';


export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');
  return (
    <ThemeContext value={{ theme,setTheme }}>
      {children}
    </ThemeContext>
  );
}
