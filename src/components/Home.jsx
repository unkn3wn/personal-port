import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Pg1 from "./Pg1";
import Skills from "./Pg2";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <div>
      <section className="h-screen w-full white:bg-blue-900 dark:bg-neutral-900 dark:text-white">
        <Pg1 />
      </section>
      <section className="h-screen w-full white:bg-white dark:bg-neutral-900 dark:text-white">
        <Skills />
      </section>
      <section className="h-screen w-full white:bg-white dark:bg-neutral-900 dark:text-white">
        <h1>three</h1>
      </section>
    </div>
  );
}
