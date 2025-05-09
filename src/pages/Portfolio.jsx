import React from "react";
import Lottie from "lottie-react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import WebDeveloperAnimation from "../assets/WebDeveloperAnimation.json";
import ContactUs from "../assets/contactUs.json";
import CodingAnimation from "../assets/CodingAnimation.json";
import SamplePic from "../assets/SamplePic.jpeg";
import { FaArrowRightLong } from "react-icons/fa6";
import { SiXdadevelopers } from "react-icons/si";
import { GrVmMaintenance } from "react-icons/gr";
import { GrOptimize } from "react-icons/gr";

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
    <div lang="en" className="scroll-smooth">
      <title>Portfolio</title>

      <nav className="bg-[#278783] fixed top-0 left-0 w-full z-50 shadow-md ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <h1 className="text-[#ffebd0] sm:text-2xl">AnThrax</h1>
          <button
            onClick={toggleNavbar}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  dark:text-gray-400  "
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">menu</span>
            <svg
              className="w-5 h-5 text-[#ffebd0]"
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
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent items-center  md:gap-6 ">
              <li>
                <a
                  href="#home"
                  className="block items-center py-2 px-3 rounded md:bg-transparent md:text-green-500 md:p-0 dark:text-[#ffebd0] hover:text-green-500"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-2 px-3 text-gray-900 rounded  md:hover:bg-transparent md:border-0 hover:text-green-500 md:p-0 dark:text-[#ffebd0]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="block py-2 px-3 text-gray-900 rounded  md:border-0 hover:text-green-500 md:p-0 dark:text-[#ffebd0]"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0 hover:text-green-500 md:p-0 dark:text-[#ffebd0] md:dark:hover:text-green-500 "
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="px-5 md:px-10 md:text-1xl lg:px-40 xl:px-60 bg-[#ffebd0]">
        <section className="min-h-screen" id="home">
          <div className="flex flex-col  items-center justify-center s: py-14 xs:pt-30 md:gap-60  md:flex-row min-h-screen md:pb-28 lg:flex-row ">
            <div className="md:p-5 md:items-center md:justify-center ">
              <h1 className="text-2xl font-medium text-[#278783] md:text-4xl">
                Hi! everyone,{" "}
              </h1>
              <h1 className=" text-2xl font-medium text-[#278783] xs:text-2xl md:text-4xl lg:text-1xl">
                I'm
                <span className=" text-4xl md:text-6xl lg:text-5xl ">
                  {" "}
                  Jaymar Tuba
                </span>
              </h1>
              <p className="text-2xl font-medium text-[#278783] mb-4 text-wrap py-2 md:text-4xl">
                Web <span className="text-[#278783]">Developer</span>
              </p>
              {/* <button className="bg-black text-white text-sm py-2 px-4 rounded-lg cursor-pointer hover:bg-gray-800 border-2 border-green-500 xs:p-2 xs:text-sm">
                Get Started
              </button> */}
            </div>
            <div className="relative flex items-center justify-center xs:relative top-10 xs:w-45 h-45 md:w-80 md:h-80 md:items-end md:justify-end lg:w-95 lg:h-90 lg:items-end lg:justify-end">
              <Lottie animationData={CodingAnimation} />
            </div>
          </div>
          <div className=" flex justify-center gap-16 py-10 text-[#278783] s:text-2xl xs:gap-10 xs:text-xl md:relative bottom-20 md:text-2xl ">
            <AiFillTwitterCircle className="hover:text-gray-800" />
            <AiFillGithub className="hover:text-gray-800" />
            <AiFillFacebook className="hover:text-gray-800" />
            <AiFillLinkedin className="hover:text-gray-800" />
          </div>
        </section>

        <hr className="h-px bg-white border-0 dark:bg-black xs: relative top-0 " />

        <section id="about" className="min-h-screen">
          <section className="text-[#278783] body-font">
            <div className="container px-5 py-24 mx-auto flex flex-cols xs:py-5 s:py-5">
              <div className="lg:w-4/6 mx-auto">
                <div className="flex flex-col sm:flex-row mt-10 ">
                  <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8 ">
                    <div className="w-40 h-40 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 ">
                      <img src={SamplePic} alt="myPic" />
                    </div>
                    <div className="flex flex-col items-center text-center justify-center">
                      <h2 className="font-medium title-font mt-4 text-[#278783] text-lg">
                        Jaymar Abao Tuba
                      </h2>
                      <div className="w-12 h-1 bg-[#278783] last:rounded mt-2 mb-4 cursor-pointer"></div>
                      <p className="text-base">Web Developer</p>
                    </div>
                  </div>
                  <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-500 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left ">
                    <p className="leading-relaxed text-lg mb-4 pt-5 s:p-5 pl-10 xs:text-sm xs:p-5">
                      I'm a web developer based in the Philippines. I have a
                      passion for web development and love to create websites
                      that are not only visually appealing but also highly
                      functional. I have experience working with a variety of
                      technologies, including HTML, CSS, JavaScript, React,
                      Node.js, and MongoDB. I'm always eager to learn new things
                      and take on new challenges. When I'm not coding, you can
                      find me reading, playing video games, or spending time
                      with my family.
                    </p>
                    <a
                      href="#contact"
                      className="text-[#278783] inline-flex items-center   xs:py-2 xs:px-4 xs:text-sm md:py-2 md:px-6 md:text-lg lg:py-3 lg:px-6 lg:text-xl border-2 border-[#278783] rounded-lg hover:bg-[#278783] hover:text-white cursor-pointer"
                    >
                      Projects
                      <FaArrowRightLong className="ml-2 mt-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <hr className="h-px bg-gray-200 border-0 dark:bg-black xs:relative top-8  " />

        <section className="min-h-screen" id="services">
          <div className="container px-5 py-20 mx-auto flex flex-wrap xs:py-0 s:py-0">
            <div className=" pt-20 lg:w-1/2  mb-10  lg:mb-0 rounded-lg overflow-hidden xs:pt-10 s:pt-0">
              <Lottie animationData={WebDeveloperAnimation} />
            </div>
            <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center xs:pb-0 s:pb-10 ">
              <div className="flex flex-col mb-10 lg:items-start items-center border-2 border-[#278783] rounded-lg p-5">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                  <SiXdadevelopers className="w-6 h-6 text-[#278783]" />
                </div>
                <div className="flex-grow ">
                  <h2 className="text-[#278783] text-lg title-font font-medium mb-3">
                    E-commerce Development
                  </h2>
                  <p className="leading-relaxed text-base text-[#278783] ">
                    <ul>
                      <li>Online store setup</li>
                      <li>Payment gateway integration</li>
                      <li>Shopping cart functionality</li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="flex flex-col mb-10 lg:items-start items-center border-2 border-[#278783] rounded-lg p-5">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                  <GrVmMaintenance className="w-6 h-6 text-[#278783]" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-[#278783] text-lg title-font font-medium mb-3">
                    Website Maintenance & Support
                  </h2>
                  <p className="leading-relaxed text-base text-[#278783] ">
                    <ul>
                      <li>Regular updates and backups</li>
                      <li>Security monitoring and fixes</li>
                      <li>Performance optimization</li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="flex flex-col mb-10 lg:items-start items-center border-2 border-[#278783] rounded-lg p-5">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                  <GrOptimize className="w-6 h-6 text-[#278783]" />
                </div>
                <div className="flex-grow ">
                  <h2 className="text-[#278783] text-lg title-font font-medium mb-3">
                    Web Performance Optimization
                  </h2>
                  <p className="leading-relaxed text-base text-[#278783]">
                    <ul>
                      <li>Page speed optimization</li>
                      <li>Caching implementation</li>
                      <li>Code optimization</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="h-px bg-gray-200 border-0 dark:bg-black xs:relative top-8" />

        <section id="contact" className="min-h-screen ">
          <div className=" container xs:pt-10 md:py-56 flex md:flex-row items-center justify-center xs:flex flex-col-reverse ">
            <form
              action="#"
              className="max-w-lg mx-auto border-2 border-[#278783] rounded-lg p-5 shadow-md md:w-1/2"
            >
              <div className="mb-4">
                <label
                  className="block text-[#278783] text-sm font-bold mb-2"
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
                  className="block text-[#278783]  text-sm font-bold mb-2"
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
                  className="block text-[#278783]  text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  rows="4"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="flex items-center justify-between text-center ">
                <button
                  className=" border-2 border-[#278783] bg-[#278783] text-[#ffebd0] text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-gray-800"
                  type="submit"
                  linkto="jaymartuba2@gmail.com"
                >
                  Send
                </button>
              </div>
            </form>
            <div className=" md:pb-10 flex items-center justify-center xs:relative right-5 s:relative">
              <Lottie animationData={ContactUs} />
            </div>
          </div>
        </section>

        <footer className="py-4 sm:items-center">
          <div className="text-center text-sm text-gray-500 py-5">
            &copy; {new Date().getFullYear()} Jaymar Tuba. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}
export default Home;
