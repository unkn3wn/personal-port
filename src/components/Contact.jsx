import { useForm } from "@formspree/react";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  const [state, handleSubmit] = useForm("xqkoarpl");
  if (state.succeeded) {
    return <p>Thanks will be back with you as soon as possible!</p>;
  }

  return (
    <div>
      <h1 className={styles.title}>Contact Me</h1>
      <form className={styles.theForm} onSubmit={handleSubmit}>
        <input
          className={styles.inputs}
          placeholder="Name"
          id="name"
          type="text"
          name="name"
          required
        />
        <input
          className={styles.inputs}
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          required
        />

        <textarea className={styles.message} placeholder="Message" id="message" name="message" required />
        <button className={styles.subbttn} type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
