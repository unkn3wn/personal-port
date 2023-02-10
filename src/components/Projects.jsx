import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Projects.module.css";
import productsImg from "../assets/Ecom/ProductsPage.png";
import CryptoFinder from "../assets/Crypto/CryptoFinder.png";
import TodoListImg from "../assets/TodoList/TodoList.png";
import WorkForceImg from "../assets/WorkForce/WorkForceSmall.jpg";
import PasswordGenIMg from "../assets/passwordgen/passwordGen.jpg";
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
        {/* password gen app */}
        <div data-aos="fade-right" className={styles.singleCard}>
          <h1 className={styles.titleProjects}>Password Generator</h1>
          <img className={styles.todoImg} src={PasswordGenIMg} />
          <h3 className={styles.descriptionsProjects}>
            Makes you a really secure password has 16 characters: includes 6
            lowercase letters, 2 uppercase letters, 3 numbers, as well as 3
            symbols
          </h3>
          <button className={styles.infoButton}>
            <a target="_blank" href="https://p3sswodgenerator.netlify.app/">
              Website
            </a>
          </button>
          <button className={styles.infoButton}>
            <a target="_blank" href="https://github.com/unkn3wn/Password-Generator">
              Github
            </a>
          </button>

         
        </div>

        <div data-aos="fade-left" className={styles.singleCard}>
          <h1 className={styles.titleProjects}>Todo List</h1>
          <img className={styles.todoImg} src={TodoListImg} />
          <h3 className={styles.descriptionsProjects}>
            Allows a user to perform CRUD
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
        <div data-aos="fade-right" className={styles.singleCard}>
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

        <div data-aos="fade-left" className={styles.singleCard}>
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

        <h1 data-aos="fade-right" className={styles.volun}>
          Voluntary Work
        </h1>

        <div data-aos="fade-left" className={styles.singleCard}>
          <h1 className={styles.titleProjects}>Workforce Hope</h1>
          <img className={styles.WorkForceImg} src={WorkForceImg} />
          <h3 className={styles.descriptionsProjects}>
            Helped with the front end of this project in a company called Adapa
            Group located in Guadalajara, Mexico. Used tailwind for this
          </h3>
          <button className={styles.infoButton}>
            <a target="_blank" href="https://www.workforcehope.com/">
              Website
            </a>
          </button>
          <button className={styles.infoButton}>
            <a
              target="_blank"
              href="https://github.com/AdapaGroup/workforce_frontend"
            >
              Github
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
