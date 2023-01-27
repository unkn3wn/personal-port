import styles from "../styles/Education.module.css";
import fullColl from "../assets/Education/FullCol.png";
import fullStack from "../assets/Education/FullStack.jpg";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Education() {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.contentEdu} data-aos="fade-right">
        <div>
          <img className={styles.fullCollImg} src={fullColl} />
        </div>
        <div className={styles.wording}>
          <h1 className={styles.title}>Fullerton College</h1>
          <h5 className={styles.major}>Cyber Security: 6 credits</h5>
          <h5 className={styles.courses}>
            Courses Taken: Intro to Cyber Security, Intro to Operating Systems
          </h5>
          <h6 className={styles.date}>08/21-01/22</h6>
        </div>
      </div>

      <div className={styles.contentEdu} data-aos="fade-left">
        <img className={styles.fullStackImg} src={fullStack} />

        <div className={styles.wording}>
          <h1 className={styles.title}>
            San Jose State University Tech Bootcamp{" "}
          </h1>
          <h3 className={styles.title2}>Powered by FullStack Academy</h3>
          <h5 className={styles.major}>Full Stack Web Development</h5>
          <h5 className={styles.courses}>Certificate</h5>
          <h6 className={styles.date}>09/22-12/22</h6>
        </div>
      </div>
    </div>
  );
}
