import React, { useState, useContext } from "react";
import "./styles.css";

const ThemeContext = React.createContext("dark");

function Comp1() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Current Theme: {theme}</h1>
    </div>
  );
}

function Comp2() {
  const { setTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }} className="App">
      <div
        style={
          theme === "dark"
            ? { backgroundColor: "black", color: "white" }
            : { backgroundColor: "white" }
        }
      >
        <Comp1 />
        <Comp2 />
      </div>
    </ThemeContext.Provider>
  );
}
