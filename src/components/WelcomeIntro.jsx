import styles from "../styles/typing.module.css";
import ferni from "../assets/meFoto.jpg";

export default function Pg1() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.description}>
          <h3 className={styles.text}>Hello</h3>
          <h1 data-text="I'M FERNANDO REYES" className={styles.nameMe}>
            I'M FERNANDO REYES
          </h1>
          <h3 className={styles.text}>Welcome to my site</h3>
        </div>
        <div className={styles.imgCon}>
          <img className={styles.ferni} src={ferni} />
        </div>
      </div>
      <div className="mt-36">
        <h3 className="text-center mx-10 text-4xl">
          Passionate Web Developer, Seeking to land my first job as a Web
          Developer. Always open to learn new languages and new programming
          stacks. Recently graduated from Full Stack Academy
        </h3>
      </div>
    </div>
  );
}
