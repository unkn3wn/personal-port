import { useForm, ValidationError } from "@formspree/react";
import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  const [state, handleSubmit] = useForm("xqkoarpl");
  if (state.succeeded) {
    return <p>Thanks will be back with you as soon as possible!</p>;
  }

  return (
    <div data-aos="fade-right">
      <form className={styles.theForm} onSubmit={handleSubmit}>
        <label
          for="base-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3 mx-3"
        >
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />

        <ValidationError prefix="Name" fields="name" errors={state.errors} />
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5"
        >
          Email:{" "}
        </label>
        <input
          type="email"
          name="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
          required
        />

        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label
          for="base-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5"
        >
          Message: 
        </label>

        <textarea
          placeholder="Message"
          id="message"
          name="message"
          requiredid="message"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></textarea>

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          className="flex rounded-3xl justify-center text-center bg-blue-700 w-16 mt-12 ml-auto mr-10"
          type="submit"
        >
          send
        </button>
      </form>
    </div>
  );
}
