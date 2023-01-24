import styles from "../styles/ReaMore.module.css";
import { useState } from "react";

function ReaMore({ children }) {
  const sentances = children;
  const [readMore, setReadMore] = useState(true);
  const toggleReadMore = () => {
    setReadMore(!readMore);
  };
  return (
    <p className={styles.text}>
      {readMore ? sentances.slice(0, 210) : sentances}
      <span className={styles.continueRead} onClick={toggleReadMore}>
        {readMore ? "   continue reading" : "hide"}
      </span>
    </p>
  );
}

export default function AboutMe() {
  return (
    <div className={styles.main}>
      <h3>
        <ReaMore>
          olá I am recent graduate from San Jose State University Tech Bootcamp
          Powered by FullStack Academy seeking to land my first job. I Love to
          learn new things especially if its tech related. How I got into
          coding? When I was in seventh grade I remeber we would go to computer
          lab probably 1 time a week and if we were lucky we would go twice a
          week. I was searching the web and I right clicked and a few options
          came up. I saw the word inspect and I clicked on it and a bunch of
          random code had popped up. At the time I had known code as "random
          letters and words". My last year of high school was when I really
          started to learn more about code I took the intro to computer science
          course where I learned about HTML, CSS, and a little bit of javascript
          on code.org. Despite loving code I went in with the idea of wanting to
          major in Cyber Secrity but that didnt go as planned so thats when I
          decided to do a Bootcamp to learn about web development, and here I am
          today coding my own portfolio in hopes of landing my first job to
          continue expanding on my knowledge of code.
        </ReaMore>
      </h3>
    </div>
  );
}
