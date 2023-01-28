import styles from "../styles/Footer.module.css";
import git from "../assets/git.png";
import LinkedIn from "../assets/linkedin.png";

export default function Footer() {

  return (
    <div className={styles.container}>
      {/* github link */}
      <div className={styles.children}>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/fernando-reyes-673860240/"
        >
          <img className={styles.img} src={LinkedIn} />
        </a>

        <a target="_blank" href="https://github.com/unkn3wn">
          {" "}
          <img className={styles.img} src={git} />
        </a>
      </div>
    </div>
  );
}
