import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./components/Home";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="h-screen white:bg-white dark:bg-black dark:text-white">
      <button
        className="bg-green-200 p-4 rounded-3xl"
        onClick={() => {
          handleThemeSwitch();
        }}
      >
        Dark Mode
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
