import styles from "../styles/Education.module.css";
import fullColl from "../assets/Education/FullCol.png";
import fullStack from "../assets/Education/FullStack.jpg";

export default function Education() {
  return (
    <div className={styles.main}>


      <div className={styles.contentEdu}>
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

      
        <div className={styles.contentEdu}>
          <img className={styles.fullStackImg} src={fullStack} />

          <div className={styles.wording}>
            <h1 className={styles.title}>
              San Jose State University Tech Bootcamp{" "}
            </h1>
            <h3>Powered by FullStack Academy</h3>
            <h5 className={styles.major}>Full Stack Web Development</h5>
            <h5 className={styles.courses}>Certificate</h5>
            <h6 className={styles.date}>09/22-12/22</h6>
          </div>
        </div>

   


    </div>

  );
}
