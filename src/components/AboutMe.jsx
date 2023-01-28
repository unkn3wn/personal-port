import styles from "../styles/ReaMore.module.css";
import { useEffect } from "react";
import { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


function ReaMore({ children }) {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  const sentances = children;
  const [readMore, setReadMore] = useState(true);
  const toggleReadMore = () => {
    setReadMore(!readMore);
  };
  return (
    <p className={styles.text}>
      {readMore ? sentances.slice(0, 221) : sentances}
      <span className={styles.continueRead} onClick={toggleReadMore}>
        {readMore ? "   continue reading" : "hide"}
      </span>
    </p>
  );
}

export default function AboutMe() {
  return (
    <div className={styles.main}>
      <h3 data-aos="fade-right">
        <ReaMore>
          Olá! I am a recent graduate from San Jose State University Tech
          Bootcamp, Powered by FullStack Academy, seeking to land my first job.
          I love to learn new things especially if it is tech related. How did I
          get into coding? When I was in seventh grade I remember we would go to
          the computer lab probably once a week and, if we were lucky, we would
          go twice a week. When I was searching the web, I right clicked and a
          few options came up. I saw the word inspect, clicked on it, and long
          lines of random code popped up. At the time, I had known code as
          "random letters and words". My last year of high school was when I
          started to learn more about code. I took the Intro to Computer Science
          course where I learned about HTML, CSS, and some Javascript on
          Code.org.Two years later,I decided to do a Bootcamp to learn about web
          development, and here I am today, coding my own portfolio, to land my
          first job and continue expanding my knowledge of code.
        </ReaMore>
      </h3>
    </div>
  );
}
