import CryptoFinder from "../assets/CryptoFinder.png";
import CryptoFinderSearch from "../assets/CryptoFinderSearch.png";
import styles from "../styles/RealFakeCloths.module.css";
export default function CryptoFinderPage() {
  return (
    <div>
      <img className={styles.pic3} src={CryptoFinder} />
      <img className={styles.pic4} src={CryptoFinderSearch} />
      <h1 className={styles.title}>Description</h1>
      <div className="display flex justify-center ">
        <a
          className={styles.links}
          target="_blank"
          href="https://github.com/unkn3wn/Simple-Crypto-Finder"
        >
          {" "}
          Github
        </a>

        <a
          className={styles.links}
          target="_blank"
          href="https://simplecryptoinfoprices.netlify.app/"
        >
          Deployed Site
        </a>
        <a
          className={styles.links}
          target="_blank"
          href="https://www.coingecko.com/en/api"
        >
          Source
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
