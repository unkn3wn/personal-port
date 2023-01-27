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
      <section >
        <Pg1 />
      </section>
      <section className={styles.sections}>
        <h1 className={styles.skills}  data-aos="fade-left">SKILLS</h1>
        <Skills />
      </section>
      <section className={styles.sections}>
        <h1 className={styles.projects}  data-aos="fade-right">Projects</h1>
        <Projects />
      </section>
      <section className={styles.sections}>
        <h1 className={styles.education} data-aos="fade-right">Education</h1>
        <Education/>
      </section>
      <section className={styles.sections}>
        <h1 className={styles.aboutMe} data-aos="fade-left">About Me</h1>
        <AboutMe/>
      </section>
      <section className={styles.sections}>
      <h1 className={styles.contactMe}>Contact Me</h1>
    <Contact/>
      </section>
      <section className={styles.sections}>
      <Footer/>
      </section>
    
    </div>
  );
}
