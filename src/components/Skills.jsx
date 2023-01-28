import react, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <div>
      {/* data-aos */}
    

      <div className="flex flex-wrap mx-auto justify-center ">
        {/* javaScript */}
        <div
          data-aos="fade-up"
          className="flex flex-col bg-gray-800  mx-5 mt-9 rounded-lg shadow-md w-full  overflow-hidden sm:w-52 "
        >
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
            <p className="bg-blue-500 text-center">Javascript</p>
          </a>
        </div>
        {/* react */}
        <div
          data-aos="fade-up"
          className="flex flex-col bg-gray-800  mx-5 mt-9 rounded-lg shadow-md w-full  overflow-hidden sm:w-52"
        >
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

        {/* nodeJs */}
        <div
          data-aos="fade-up"
          className="flex flex-col mx-5 mt-9 bg-gray-800 rounded-lg shadow-md w-full  overflow-hidden sm:w-52"
        >
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg"
            className="h-20 m-6 justify-center"
            alt="NodeJS"
          />
          <a
            href="https://nodejs.org/en/"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500"
          >
            <p>NodeJS</p>
          </a>
        </div>
        {/* express */}

        <div
          data-aos="fade-up"
          className="flex flex-col mx-5 mt-9 bg-gray-800 rounded-lg shadow-md w-full  overflow-hidden sm:w-52"
        >
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg"
            className="h-20 m-6 justify-center"
            alt="Express"
          />
          <a
            href="https://expressjs.com/"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500"
          >
            <p className="bg-blue-500 text-center">Express</p>
          </a>
        </div>
        {/* redux */}

        <div
          data-aos="fade-up"
          className="flex flex-col mx-5 mt-9 bg-gray-800 rounded-lg shadow-md w-full  overflow-hidden sm:w-52"
        >
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg"
            className="h-20 m-6 justify-center"
            alt="Redux"
          />
          <a
            href="https://redux.js.org/"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500"
          >
            Redux
          </a>
        </div>

        {/* psql */}
        <div
          data-aos="fade-up"
          className="flex flex-col mx-5 mt-9 bg-gray-800 rounded-lg shadow-md w-full  overflow-hidden sm:w-52"
        >
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg"
            className="h-20 m-6 justify-center"
            alt="PostgreSQL"
          />
          <a
            href="https://www.postgresql.org/"
            target="_blank"
            className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500"
            rel="noreferrer"
          >
            <p className="bg-blue-500 text-center">PostgreSQL</p>
          </a>
        </div>
        {/* HTML */}
        <div
          data-aos="fade-up"
          className="flex flex-col mx-5 mt-9 bg-gray-800 rounded-lg shadow-md w-full overflow-hidden sm:w-52"
        >
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

        {/* css */}
        <div
          data-aos="fade-up"
          className="flex flex-col mx-5 mt-9 bg-gray-800 rounded-lg shadow-md w-full  overflow-hidden sm:w-52"
        >
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
            className="h-20 m-6 justify-center"
            alt="CSS3"
          />
          <a
            href="https://www.w3.org/TR/CSS/#css"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500"
          >
            <p className="bg-blue-500 text-center">CSS</p>
          </a>
        </div>

        {/* bootstrap */}
        <div
          data-aos="fade-up"
          className="flex flex-col mx-5 mt-9 bg-gray-800 rounded-lg shadow-md w-full  overflow-hidden sm:w-52"
        >
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
            className="h-20 m-6 justify-center"
            alt="Bootstrap"
          />
          <a
            href="https://getbootstrap.com/"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500"
          >
            <p className="bg-blue-500 text-center">Bootstap</p>
          </a>
        </div>

        {/* mateiral ui */}
        <div
          data-aos="fade-up"
          className="flex flex-col bg-gray-800 rounded-lg shadow-md w-full mx-5 mt-9 overflow-hidden sm:w-52"
        >
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/materialui-colored.svg"
            className="h-20 m-6 justify-center"
            alt="Material UI"
          />
          <a
            href="https://mui.com/"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500"
          >
            <p className="bg-blue-500 text-center">Material UI</p>
          </a>
        </div>

        {/* tailwind */}
        <div
          data-aos="fade-up"
          className="flex flex-col bg-gray-800 rounded-lg shadow-md w-full mx-5 mt-9 overflow-hidden sm:w-52"
        >
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
            className="h-20 m-6 justify-center"
            alt="TailwindCSS"
          />
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500"
          >
            <p className="bg-blue-500 text-center">Tailwind CSS</p>
          </a>
        </div>

        {/* webpack */}

        <div
          data-aos="fade-up"
          className="flex flex-col bg-gray-800 rounded-lg shadow-md w-full mx-5 mt-9 overflow-hidden sm:w-52"
        >
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/webpack-colored.svg"
            className="h-20 m-6 justify-center"
            alt="Webpack"
          />
          <a
            href="https://webpack.js.org/"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500"
          >
            <p className="bg-blue-500 text-center">Webpack</p>
          </a>
        </div>
      </div>
    </div>
  );
}
