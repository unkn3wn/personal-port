import react, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <div>
      <div className="flex flex-wrap justify-center ">
        {/* javaScript */}
        <div className="flex flex-col bg-black rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
            className="h-20 m-6 justify-center"
            alt="JavaScript"
          />
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500"
          >
            <p className="bg-blue-500 text-center">javascript</p>
          </a>
        </div>
        {/* HTML */}
        <div className="flex flex-col bg-black rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
            className="h-20 m-6 justify-center"
            alt="HTML5"
          />
          <a
            href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500"
          >
            <p className="bg-blue-500 text-center">HTML</p>
          </a>
        </div>
        {/* react */}
        <div className="flex flex-col bg-black rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
            className="h-20 m-6 justify-center"
            alt="React"
          />
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noreferrer "
            className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500"
          >
            <p className="bg-blue-500 text-center">REACT</p>
          </a>
        </div>
        {/* css */}
        <div>
          <a
            href="https://www.w3.org/TR/CSS/#css"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
              width="36"
              height="36"
              alt="CSS3"
            />
          </a>
        </div>
        {/* bootstrap */}
        <div>
          <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
              width="36"
              height="36"
              alt="Bootstrap"
            />
          </a>
        </div>
        {/* mateiral ui */}
        <div>
          <a href="https://mui.com/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/materialui-colored.svg"
              width="36"
              height="36"
              alt="Material UI"
            />
          </a>
        </div>
        {/* webpack */}
        <div>
          <a href="https://webpack.js.org/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/webpack-colored.svg"
              width="36"
              height="36"
              alt="Webpack"
            />
          </a>
        </div>
        {/* nodeJs */}
        <div>
          <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg"
              width="36"
              height="36"
              alt="NodeJS"
            />
          </a>
        </div>
        {/* express */}
        <div>
          <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg"
              width="36"
              height="36"
              alt="Express"
            />
          </a>
        </div>
        {/* psql */}
        <div>
          <a
            href="https://www.postgresql.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg"
              width="36"
              height="36"
              alt="PostgreSQL"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
