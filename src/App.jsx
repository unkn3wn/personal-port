import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import Home from "./components/Home";
import RealFakeClothsInfo from "./components/RealFakeClothsInfo"
import CryptoFinderPage from "./components/CryptoFinder"

import Todo from "./components/TodoList";

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
    <div className=" white:bg-white dark:bg-stone-800 dark:text-white dark:text-w ">
      {/* dark mode light mode div below */}
      <div className="mt-0">
        <h1>this is where we will put the nav</h1>
        <IconButton
          sx={{
            fontSize: "100px",
          }}
          onClick={() => {
            handleThemeSwitch();
          }}
        >
          {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RealFakeClothsProject" element={<RealFakeClothsInfo/>}/>
        <Route path="/CryptoFinder" element={<CryptoFinderPage/>}/>
        <Route path="/Todo" element={<Todo/>}/>
      </Routes>
    </div>
  );
}

export default App;
