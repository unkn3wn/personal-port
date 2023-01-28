import mainStrangers from "../assets/StrangerThings/strangersMain.png";
import strangersPost from "../assets/StrangerThings/stangersPost.png";
import strangersmessages from "../assets/StrangerThings/strangersmessages.png";
import styles from "../styles/Strangers.module.css";

export default function StrangersThings() {
  return (
    <div className="mt-[4.7rem]">
      <img className={styles.pic1} src={mainStrangers} />
      <img className={styles.pic2} src={strangersPost} />
      <img className={styles.pic3} src={strangersmessages} />
      <h1 className={styles.title}>Description</h1>
      <div className="display flex justify-center ">
        <a
          className={styles.links}
          target="_blank"
          href="https://github.com/unkn3wn/strangersThings"
        >
          {" "}
          Github
        </a>

        <a
          className={styles.links}
          target="_blank"
          href="https://strangers-things.vercel.app/"
        >
          Deployed Site
        </a>
      </div>
      <h3 className={styles.description}>
        This app uses the CoinGecko api to fetch real time data. Fetches the top
        10 crytpo exchanges, and the Data updates every five to ten minutes.
        What is coin gecko?"CoinGecko is a digital currency price and
        information data platform. It helps its users quantitatively evaluate
        and rank their coins. CoinGecko is a Singapore-based company that was
        founded in 2014 by TM Lee and Bobby Ong."
      </h3>
    </div>
  );
}
