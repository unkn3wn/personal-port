import styles from "../styles/RealFakeCloths.module.css";
import ProductsPage from "../assets/Ecom/ProductsPage.png";
import ProductsPageSmallScreen from "../assets/Ecom/ProductsPageSmallScreen.png";
import SmallerScreenProducts from "../assets/Ecom/SmallerScreenProducts.png";

import { useNavigate } from "react-router-dom";

export default function RealFakeClothsInfo() {
  const nav = useNavigate;
  return (
    <div className="white:bg-white dark:bg-stone-800 dark:text-white dark:text-w ">
      <div>
        <div>
          <img className={styles.pic1} src={ProductsPage} />
        </div>
        <img className={styles.pic2} src={ProductsPageSmallScreen} />
        <img className={styles.pic3} src={SmallerScreenProducts} />
        <div className={styles.allDescription}>
          <h1 className={styles.title}>DESCRIPTION</h1>

          <div className="display flex justify-center ">
            <a
              className={styles.links}
              target="_blank"
              href="https://github.com/unkn3wn/graceShopper2"
            >
              {" "}
              Github
            </a>

            <a
              className={styles.links}
              target="_blank"
              href="https://nameless-wood-5974.fly.dev/"
            >
              Deployed Site
            </a>
          </div>
          <h2 className={styles.description}>
            Real Fake Clothes is my Capstone Project for the 2209 Web
            Development Bootcamp. With a group of 3, we made a fully interactive
            E-commerce website that sells clothes that can be sorted by
            category. Users can register and log in to access their own cart
            created during the register process and can begin adding items to
            their cart. Users are also protected with a JSON web token and a
            cookie secret placed in the backend. The cart functionality does not
            allow for duplicates as an alert will display once the user clicks
            the same item already in the cart, the user however may continue
            shopping as the error will fade. The cart also comes with its very
            own page that allows users to update the quantity. If the quantity
            goes below 1 the item gets removed, but users can also simply push
            the remove button to remove it as well. The site also comes with a
            checkout form for users to enter in their card information when they
            are ready to confirm the purchase. The site is styled with a mixture
            of Material UI and Tailwind where the data is stored in PostgreSQL
            and condensed with Prisma and Easy-Peasy.
          </h2>
        </div>
      </div>
    </div>
  );
}
