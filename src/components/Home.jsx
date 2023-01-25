import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

import Pg1 from "./WelcomeIntro";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Footer from "./Footer";
export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div>
      <section className={styles.sections}>
        <Pg1 />
      </section>
      <section >
        <h1 className={styles.skills}>SKILLS</h1>
        <Skills />
      </section>
      <section className={styles.sections}>
        <h1 className={styles.projects}>Projects</h1>
        <Projects />
      </section>
      <section className={styles.sections}>
        <h1 className={styles.education}>Education</h1>
        <Education/>
      </section>
      <section className={styles.sections}>
        <h1 className={styles.aboutMe}>About Me</h1>
        <AboutMe/>
      </section>
      <section className={styles.sections}>
    <Contact/>
      </section>
      <section className={styles.sections}>
      <Footer/>
      </section>
    
    </div>
  );
}
