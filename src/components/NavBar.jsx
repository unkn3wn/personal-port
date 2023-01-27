import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import { useState, useEffect } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

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
        <label className={styles.navBarToggler} for="toggle">
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </label>

        <ul className={styles.navList}>
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

          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/">Home</Link>
          </li>

          <li className={styles.navItem}>
            <Link className={styles.navLink}>Skills</Link>
          </li>

          <li className={styles.navItem}>
            <Link className={styles.navLink}>Projects</Link>
          </li>

          <li className={styles.navItem}>
            <Link className={styles.navLink}>Education</Link>
          </li>

          <li className={styles.navItem}>
            <Link className={styles.navLink}>About Me</Link>
          </li>

          <li className={styles.navItem}>
            <Link className={styles.navLink}>Contact Me</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
