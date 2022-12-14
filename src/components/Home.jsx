import react from "react";
import Pg1 from "./Pg1";


export default function Home() {
  return (  
    <div>
      
      <section className="h-screen w-full white:bg-blue-900 dark:bg-black dark:text-white">
      <Pg1/>
      </section>
      <section className="h-screen w-full white:bg-white dark:bg-red-400 dark:text-white">
        <h1>two</h1>
      </section>
      <section className="h-screen w-full white:bg-white dark:bg-black dark:text-white">
        <h1>three</h1>
      </section>




    </div>
  );
}
