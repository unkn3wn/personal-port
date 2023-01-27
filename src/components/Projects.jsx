import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Projects.module.css";
import productsImg from "../assets/Ecom/ProductsPage.png";
import CryptoFinder from "../assets/Crypto/CryptoFinder.png";
import TodoListImg from "../assets/TodoList/TodoList.png";
import mainStrangers from "../assets/StrangerThings/strangersMain.png";

export default function Projects() {
  const nav = useNavigate();
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <div>
      {/* make a div for all the cards */}
      <div className={styles.allCards}>
        {/* another for each individual card  */}
        <div data-aos="fade-left" className={styles.singleCard}>
          <h1 className={styles.titleProjects}>Real Fake Cloths</h1>
          <img src={productsImg} className={styles.eComImg} />
          <h3 className={styles.descriptionsProjects}>
            A fullt interactve E-Commerce website that allows a user to exchange
            currency for a variey of clothing{" "}
          </h3>
          <button
            onClick={() => {
              nav("/RealFakeClothsProject");
            }}
            className={styles.infoButton}
          >
            Learn More
          </button>
        </div>

        <div data-aos="fade-right" className={styles.singleCard}>
          <h1 className={styles.titleProjects}>Todo List</h1>
          <img className={styles.todoImg} src={TodoListImg} />
          <h3 className={styles.descriptionsProjects}>
            Allows you to be able and do a todo list
          </h3>
          <button
            onClick={() => {
              nav("/Todo");
            }}
            className={styles.infoButton}
          >
            Learn More
          </button>
        </div>
        <div data-aos="fade-left" className={styles.singleCard}>
          <h1 className={styles.titleProjects}>Strangers Things</h1>
          <img className={styles.strangerpic1} src={mainStrangers} />
          <h3 className={styles.descriptionsProjects}>
            A craigslist clone website where one can buy and seell products
          </h3>
          <button
            onClick={() => {
              nav("/StrangersThings");
            }}
            className={styles.infoButton}
          >
            Learn More
          </button>
        </div>

        <div data-aos="fade-right" className={styles.singleCard}>
          <h1 className={styles.titleProjects}>Crypto Finder</h1>
          <img className={styles.cryptoFinder} src={CryptoFinder} />
          <h3 className={styles.descriptionsProjects}>
            Crypto Finder allows a user to search from 50+ crypto currencies to
            get basic information such as the current price, and its volume
          </h3>
          <button
            onClick={() => {
              nav("/CryptoFinder");
            }}
            className={styles.infoButton}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
