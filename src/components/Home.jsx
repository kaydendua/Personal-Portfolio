import React from "react";
import Image from "../assets/heroImage.png";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";
import { FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-full px-4 md:flex-row md:flex-row-reverse">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl sm:text-7xl font-bold text-white">
            Hi! I'm Kayden Dua!
          </h1>
          <p className="text-gray-500 py-4 max-w-md">
            I am a student and an aspiring developer. I am currently studying at
            the School of Science and Technology, Singapore. I like to code
            games and solve problems.
          </p>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/kayden-dua-2a5baa2aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer transition-transform duration-300 hover:scale-110"
            >
              <FaLinkedinIn className="text-white" size={20} />
            </a>
            <a
              href="https://github.com/kaydendua"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer transition-transform duration-300 hover:scale-110"
            >
              <FaGithub className="text-white" size={20} />
            </a>
          </div>
        </div>

        <div className="flex justify-center md:w-1/2 order-first mb-8 md:mb-0">
          <img
            src={Image}
            alt="my profile"
            className="rounded-2xl w-1/2 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
