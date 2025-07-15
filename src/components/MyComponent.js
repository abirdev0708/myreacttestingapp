import ThemeProvider from "./context/ThemeProvider";
import TaskApp from "./TaskApp";
import ThemeSwitcher from "./ThemeSwitcher";
import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';


export default function MyComponent() {
 const { theme } = useContext(ThemeContext);
console.log(theme);
  return (
    <div>
      <ThemeProvider>
        <ThemeSwitcher />
        <TaskApp />
      </ThemeProvider>
    </div>
  );
}
