import "./App.css";
import { Route, Routes } from "react-router-dom";


import Home from "./components/Home";
import RealFakeClothsInfo from "./components/RealFakeClothsInfo"
import CryptoFinderPage from "./components/CryptoFinder"
import StrangersThings from "./components/StrangersThings";
import NavBar from "./components/NavBar"

import Todo from "./components/TodoList";

function App() {
  

  return (
    <div className=" white:bg-white dark:bg-stone-800 dark:text-white dark:text-white w-full">
      {/* dark mode light mode div below */}

        <NavBar/>
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/RealFakeClothsProject" element={<RealFakeClothsInfo/>}/>
        <Route path ="/CryptoFinder" element={<CryptoFinderPage/>}/>
        <Route path ="/Todo" element={<Todo/>}/>
        <Route path ="StrangersThings" element={<StrangersThings/>}/>
      </Routes>
    </div>
  );
}

export default App;
