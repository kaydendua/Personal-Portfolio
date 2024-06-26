import React, { useState } from "react";
import { FaBars, FaTimes, FaHome, FaFolder, FaCalendar } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import icon from "../assets/icon.jpg";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  const handleLinkClick = (link) => {
    if (location.pathname !== link) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setNav(false);
  };

  const links = [
    {
      id: 1,
      text: "Home",
      link: "/",
      icon: <FaHome className="inline-block mr-2" />,
    },
    {
      id: 2,
      text: "Projects",
      link: "/projects",
      icon: <FaFolder className="inline-block mr-2" />,
    },
    {
      id: 3,
      text: "Experiences",
      link: "/experience",
      icon: <FaCalendar className="inline-block mr-2" />,
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-50 bg-opacity-80 backdrop-blur-sm">
      <div className="flex items-center">
        <img src={icon} alt="logo" className="w-14 h-14 rounded-full" />
        <h1 className="ml-4 text-xl font-CenturyGothic">Kayden Dua</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, text, link, icon }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 flex items-center"
          >
            <Link
              to={link}
              smooth
              duration={500}
              onClick={() => handleLinkClick(link)}
              className="flex items-center"
            >
              {icon}
              {text}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, text, link, icon }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl flex items-center"
            >
              <Link
                to={link}
                smooth
                duration={500}
                onClick={() => handleLinkClick(link)}
                className="flex items-center"
              >
                {icon}
                {text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
