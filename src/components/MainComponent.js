import { ThemeContext } from "./context/ThemeContext";
import React, { useContext } from 'react';
const MainComponent = ({children}) => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={theme === "light" ? "light-mode" : "dark-mode"}>
            {children}
        </div>
    );
};

export default MainComponent;