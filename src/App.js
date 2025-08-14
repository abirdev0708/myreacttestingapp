import './App.css';
import React, { useContext, useState } from 'react';
import MyComponent from './components/MyComponent';
import ThemeProvider from "./components/context/ThemeProvider";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { ThemeContext } from './components/context/ThemeContext';

function App() {
  //const { theme } = useContext(ThemeContext);
 // console.log("theme===>",theme);
 const [theme, setTheme] = useState('light');
 function onThemeChange(newTheme) {
  setTheme(newTheme)
  console.log("Theme changed to:", newTheme);
  }
  return (
    <div className={theme === 'light' ? 'light-mode' : 'dark-mode'}>
         <ThemeProvider>
        <ThemeSwitcher onThemeChange={onThemeChange}/>
      <MyComponent/>
      </ThemeProvider>
    </div>
  );
}

export default App;
