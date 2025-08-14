import TaskApp from "./TaskApp";
import React, { useContext } from 'react';


export default function MyComponent() {
// const { theme } = useContext(ThemeContext);
//console.log(theme);
  return (
    <div>
      {/* <ThemeProvider>
        <ThemeSwitcher /> */}
        <TaskApp />
      {/* </ThemeProvider> */}
    </div>
  );
}
