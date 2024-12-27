import React from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import villainImage from "../assets/Villain.jpg";

function Home() {
  const toggleNavbar = () => {
    const navbar = document.getElementById("navbar-default");
    if (navbar.classList.contains("hidden")) {
      navbar.classList.remove("hidden");
    } else {
      navbar.classList.add("hidden");
    }
  };

  return (
    <div>
      <head>
        <title>Marix</title>
      </head>

      <main className="px-5 md:px-20 md:text-1xl lg:px-40 xl:px-60 bg-gradient-to-br from-white to-green-500 via-white [background-position:35%_center] ">
        <section className="min-h-screen" id="home">
          <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow-md ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <h1 className="text-green-500 sm:text-2xl">AnThrax</h1>
              <button
                onClick={toggleNavbar}
                data-collapse-toggle="navbar-default"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  dark:text-gray-400  "
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">menu</span>
                <svg
                  className="w-5 h-5 text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
              <div
                className="hidden w-full md:block md:w-auto"
                id="navbar-default"
              >
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white items-center">
                  <li>
                    <a
                      href="#home"
                      className="block items-center py-2 px-3 rounded md:bg-transparent md:text-green-500 md:p-0 dark:text-black hover:text-green-500"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="block py-2 px-3 text-gray-900 rounded  md:hover:bg-transparent md:border-0 hover:text-green-500 md:p-0 dark:text-black "
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="block py-2 px-3 text-gray-900 rounded  md:border-0 hover:text-green-500 md:p-0 dark:text-black "
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0 hover:text-green-500 md:p-0 dark:text-black md:dark:hover:text-green-500 "
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="flex flex-col md:flex-row items-center justify-center gap-20 min-h-screen">
            <div className="md:p-5 md:items-center md:justify-center">
              <h1 className="text-2xl font-medium text-black md:text-4xl">
                Hi! everyone,{" "}
              </h1>
              <h1 className=" text-2xl font-medium text-black md:text-4xl lg:text-1xl">
                I'm
                <span className="text-4xl md:text-6xl lg:text-5xl">
                  {" "}
                  Jaymar Tuba
                </span>
              </h1>
              <p className="text-2xl font-medium text-gray-800 mb-4 text-wrap py-2 md:text-4xl">
                Web <span className="text-green-500">Developer</span>
              </p>
              <button className="bg-black text-white text-sm py-2 px-4 rounded cursor-pointer hover:bg-gray-800 border-2 border-green-500">
                Get Started
              </button>
            </div>

            <div className="relative mx-auto w-60 h-60 overflow-hiddenflex items-end justify-center md:w-80 md:h-80 md:items-end md:justify-end lg:w-95 lg:h-90 lg:items-end lg:justify-end">
              <img
                src={villainImage}
                className="w-full h-full object-cover rounded-full"
                alt="Villain"
              />
            </div>
          </div>
          <div className="text-2xl flex justify-center gap-16 py-10 text-green-500">
            <AiFillTwitterCircle className="hover:text-gray-800" />
            <AiFillGithub className="hover:text-gray-800" />
            <AiFillFacebook className="hover:text-gray-800" />
            <AiFillLinkedin className="hover:text-gray-800" />
          </div>
        </section>

        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />

        <section id="about" className="min-h-screen">
          <div className="max-w-4xl mx-auto pt-20">
            <div className="text-center m-5">
              <h2 className="text-3xl font-bold text-green-500">About Us</h2>
              <p className="text-md text-gray-800 mt-4">
                We are a team of passionate individuals dedicated to providing
                the best services in the industry. Our mission is to deliver
                high-quality solutions that exceed our clients' expectations.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-10 ">
              <div className="w-80 bg-gray-100 p-5 rounded-lg shadow-md hover:bg-green-500">
                <h3 className="text-xl font-bold text-black mb-3">
                  Our Vision
                </h3>
                <p className="text-md text-gray-800">
                  To be the leading provider of innovative and reliable
                  solutions in the industry.
                </p>
              </div>
              <div className="w-80 bg-gray-100 p-5 rounded-lg shadow-md  hover:bg-green-500">
                <h3 className="text-xl font-bold text-black mb-3">
                  Our Mission
                </h3>
                <p className="text-md text-gray-800">
                  To deliver exceptional services that help our clients achieve
                  their goals and drive success.
                </p>
              </div>
              <div className="w-80 bg-gray-100 p-5 rounded-lg shadow-md hover:bg-green-500">
                <h3 className="text-xl font-bold text-black mb-3">
                  Our Values
                </h3>
                <p className="text-md text-gray-800">
                  Integrity, Innovation, Excellence, and Customer Satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />

        <section className="min-h-screen" id="services">
          <div className="max-w-4xl mx-auto pt-20">
            <div className="text-center m-5">
              <h2 className="text-3xl font-bold text-green-500">
                Our Services
              </h2>
              <p className="text-md text-gray-800 mt-4">
                We offer a wide range of services to meet your needs. Our team
                is dedicated to providing top-notch solutions that help you
                achieve your goals.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-10">
              <div className="w-80 bg-gray-100 p-5 rounded-lg shadow-md  hover:bg-green-500">
                <h3 className="text-xl font-bold text-black mb-3">
                  Web Development
                </h3>
                <p className="text-md text-gray-800">
                  We build responsive and scalable web applications tailored to
                  your business needs.
                </p>
              </div>
              <div className="w-80 bg-gray-100 p-5 rounded-lg shadow-md  hover:bg-green-500">
                <h3 className="text-xl font-bold text-black mb-3">
                  Mobile Development
                </h3>
                <p className="text-md text-gray-800">
                  Our team creates user-friendly mobile applications for both
                  iOS and Android platforms.
                </p>
              </div>
              <div className="w-80 bg-gray-100 p-5 rounded-lg shadow-md  hover:bg-green-500">
                <h3 className="text-xl font-bold text-black mb-3">
                  UI/UX Design
                </h3>
                <p className="text-md text-gray-800">
                  We design intuitive and engaging user interfaces that provide
                  a seamless user experience.
                </p>
              </div>
              <div className="w-80 bg-gray-100 p-5 rounded-lg shadow-md  hover:bg-green-500">
                <h3 className="text-xl font-bold text-black mb-3">
                  Digital Marketing
                </h3>
                <p className="text-md text-gray-800">
                  Our digital marketing strategies help you reach a wider
                  audience and grow your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />

        <section id="contact" className="min-h-screen">
          <h1 className="text-center text-3xl font-bold p-10  text-green-500">
            Our Contact
          </h1>
          <form
            action="#"
            className="max-w-lg mx-auto bg-gray-100 p-8 rounded-lg shadow-md"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows="4"
                placeholder="Your message"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-black text-white text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-gray-800"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </section>

        <footer className="py-4 sm:items-center">
          <nav className="flex justify-between items-center gap-10">
            <ul className="flex gap-5 text-black text-sm font-medium md:text-base md:gap-10">
              <li>
                <a href="#home" className="hover:text-green-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-green-500">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-green-500">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-green-500">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center text-sm text-gray-500 py-5">
            &copy; {new Date().getFullYear()} Jaymar Tuba. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}
export default Home;
