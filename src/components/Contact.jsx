import { useForm, ValidationError } from "@formspree/react";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  const [state, handleSubmit] = useForm("xqkoarpl");
  if (state.succeeded) {
    return <p>Thanks will be back with you as soon as possible!</p>;
  }

  return (
    <div>
     
      <form className={styles.theForm} onSubmit={handleSubmit}>
        <input
          className={styles.inputs}
          placeholder="Name"
          id="name"
          type="text"
          name="name"
          required
        />
        <ValidationError prefix="Name" fields="name" errors={state.errors} />
        <input
          className={styles.inputs}
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <textarea
          className={styles.message}
          placeholder="Message"
          id="message"
          name="message"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          className="flex rounded-3xl justify-center text-center bg-blue-700 w-16 mt-12 ml-auto mr-10"
          type="submit"
        >
          send{" "}
        </button>
      </form>
    </div>
  );
}
