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
      <section>
        <Pg1 />
      </section>
      <section>
        <h1>SKILLS</h1>
        <Skills />
      </section>
      <section>
        <h1>this is the third section</h1>
      </section>
    </div>
  );
}
