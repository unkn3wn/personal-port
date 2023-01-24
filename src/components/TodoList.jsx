
import TodoListImg from "../assets/TodoList/TodoList.png";
import updateImg from "../assets/TodoList/UpdatingTodo.png";
import createImg from "../assets/TodoList/createTodo.png";
import styles from "../styles/RealFakeCloths.module.css";

export default function Todo() {
  return (
    <div>
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
        A todo list app is a digital tool that allows users to create and manage
        a list of tasks or activities that they need to complete. It typically
        features a simple interface where users can add new tasks, delete a task
        that has been complete, or update a task if the task changes.
        technologies used in git one: Postgresql, NodeJs, Javascript, and React.
        Technologies used in second git: Postgresql, Prisma, NodeJs, JavaScript,
        and React
      </h2>
    </div>
  );
}
