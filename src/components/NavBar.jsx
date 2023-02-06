import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import { useState, useEffect } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";

export default function NavBar() {
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
    <div>
      <input type="checkbox" id="toggle"></input>
      <nav>
        <a className={styles.navBarBran}>Ferni</a>
        {/* to make the hambergur so when we decrease in size */}
        <label className={styles.navBarToggler} for="toggle">
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </label>

        <ul className={styles.navList}>
          <IconButton
            sx={{
              fontSize: "100px",
              color:"white"
            }}
            onClick={() => {
              handleThemeSwitch();
            }}
          >
            {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
          </li>

          <li className={styles.navItem}>
            <a
              target="_blank"
              href="https://docs.google.com/document/d/1DTDQhnWWj55Aey2Bf4JYAG31XSgu2DjEM1szHDPAHEE/edit"
              className={styles.navLink}
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
