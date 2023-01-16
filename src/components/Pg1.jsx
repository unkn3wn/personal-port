import styles from "../styles/typing.module.css";

export default function Pg1() {
  return (
    <div >
      <div className="flex place-items-center place-content-center mt-36">
        <div className="mt-10 ml-10">
          <h3>Hello</h3>
          <h1 data-text="I'M FERNANDO REYES" className={styles.nameMe}>
            I'M FERNANDO REYES
          </h1>
          <h3>Welcome to my site</h3>
        </div>

        <div className="ml-16">
          <img className="h-56 w-56" src="meFoto.jpg" />
        </div>
      </div>
     <div className="mt-36">
        <h1  className="text-center text-2xl">ABOUT ME</h1>
        <h3 className="text-center mx-10 text-4xl">Passionate Web Developer, Seeking to land my first job as a Web Developer. Always open
            to learn new languages and new programming stacks. Recently graduated from Full Stack Academy
        </h3>
        
     </div>
    </div>
  );
}
