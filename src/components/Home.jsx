import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

import Pg1 from "./WelcomeIntro";
import Skills from "./Skills";
import Projects from "./Projects";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div>
      <section>
        <Pg1 />
      </section>
      <section className={styles.sections}>
        <h1>SKILLS</h1>
        <Skills />
      </section>
      <section className={styles.sections}>
        <h1>Projects</h1>
        <Projects />
      </section>
      <section className={styles.sections}>
        <h1>Education</h1>
      </section>
    </div>
  );
}
