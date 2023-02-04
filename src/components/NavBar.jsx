import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import { useState, useEffect } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";

export default function NavBar() {
  const [theme, setTheme] = useState("light");
  const nav = useNavigate();

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
    <div>
      <input type="checkbox" id="toggle"></input>
      <nav>
        <a className={styles.navBarBran}>Ferni</a>
        {/* to make the hambergur so when we decrease in size */}
        <label className={styles.navBarToggler} htmlFor="toggle">
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </label>

        <div className={styles.navList}>

          <div className={styles.containerDrop}>

             <IconButton
            sx={{
              fontSize: "100px",
              color: "white",
            }}
            onClick={() => {
              handleThemeSwitch();
            }}
          >
            {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

          <button className={styles.navItem}>
            <Link className={styles.navLink} to="/">
              Home
            </Link>
          </button>

          <button className={styles.navItem}>
            <a
              className={styles.navLink}
              target="_blank"
              href="https://docs.google.com/document/d/1DTDQhnWWj55Aey2Bf4JYAG31XSgu2DjEM1szHDPAHEE/edit"
            >
              {" "}
              Resume
            </a>
          </button>

            </div>         
        </div>


      </nav>
    </div>
  );
}
