import "./App.css";
import MyComponent from "./components/MyComponent";
import ThemeProvider from "./components/context/ThemeProvider";
import ThemeSwitcher from "./components/ThemeSwitcher";
import MainComponent from "./components/MainComponent";

function App() {

  return (
    <ThemeProvider>
      <MainComponent>
        <ThemeSwitcher/>
        <MyComponent />
      </MainComponent>
    </ThemeProvider>
  );
}

export default App;
