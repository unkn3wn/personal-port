import react from "react";
import TodoListImg from "../assets/TodoList.png";
import updateImg from "../assets/UpdatingTodo.png";
import createImg from "../assets/createTodo.png";
import styles from "../styles/RealFakeCloths.module.css";

export default function Todo() {
  return (
    <div>
      <h1>this</h1>
      <img className={styles.firstImage} src={TodoListImg} />
      <img className={styles.firstImage} src={updateImg} />
      <img className={styles.firstImage} src={createImg} />
      <h1 className={styles.title}>DESCRIPTION</h1>
      <div className="display flex justify-center ">
        <a
          className={styles.links}
          target="_blank"
          href="https://github.com/unkn3wn/todoList"
        >
          {" "}
          First Git
        </a>
        <a
          className={styles.links}
          target="_blank"
          href="https://github.com/unkn3wn/todoListPrisma"
        >
          {" "}
          Second Git
        </a>

        <a
          className={styles.links}
          target="_blank"
          href="https://delicate-wildflower-651.fly.dev/"
        >
          Deployed Site
        </a>
      </div>
      <h2 className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex
        accusantium officia ut sunt nostrum neque excepturi voluptate
        cupiditate. Nihil aperiam consequatur mollitia. Voluptate aspernatur id
        accusantium repellat enim dolor!
      </h2>
    </div>
  );
}
