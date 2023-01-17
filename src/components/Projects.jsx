import react, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Projects.module.css";
import productsImg from "../assets/ProductsPage.png";

export default function Projects() {
    const nav = useNavigate()
  return (
    <div>
      {/* make a div for all the cards */}
      <div className={styles.allCards}>
        {/* another for each individual card  */}
        <div className={styles.singleCard}>
          <h1>REAL FAKE CLOTHS</h1>
          <img src={productsImg} className={styles.projectImg} />
          <h3>
            A fullt interactve E-Commerce website that allows a user to exchange
            currency for a variey of clothing{" "}
          </h3>
          <button 
            onClick={()=>{
                nav('/RealFakeClothsProject')
            }}
          className={styles.infoButton}>Learn More</button>
        </div>
      </div>
    </div>
  );
}
