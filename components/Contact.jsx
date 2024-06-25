import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-gray-800 to-gray-950 p-4 pb-12"
    >
      <div className="flex flex-col max-w-screen-lg mx-auto justify-center w-full h-full">
        <div className="text-center p-6">
          <p className="text-3xl font-bold text-white">Contact Me</p>
        </div>

        <div className="flex items-center justify-center">
          <a
            href="https://www.linkedin.com/in/kayden-dua-2a5baa2aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer transition-transform duration-300 hover:scale-110 mx-4"
          >
            <FaLinkedinIn className="text-white" size={20} />
          </a>
          <a
            href="https://github.com/kaydendua"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer transition-transform duration-300 hover:scale-110 mx-4"
          >
            <FaGithub className="text-white" size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
