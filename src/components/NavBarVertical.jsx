import React from "react";
import {
  FaHome,
  FaUserAlt,
  FaFolderOpen,
  FaLaptopCode,
  FaEnvelopeOpen,
} from "react-icons/fa";
import { Link } from "react-scroll";

const NavBarVertical = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <div className="flex items-center justify-between w-full">
            <span className="ml-2 select-none">Home</span>
            <FaHome size={30} />
          </div>
        </>
      ),
      to: "home",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <div className="flex items-center justify-between w-full">
            <span className="ml-2 select-none">About</span>
            <FaUserAlt size={30} />
          </div>
        </>
      ),
      to: "about",
    },
    {
      id: 3,
      child: (
        <>
          <div className="flex items-center justify-between w-full">
            <span className="ml-2 select-none">Skills</span>
            <FaLaptopCode size={30} />
          </div>
        </>
      ),
      to: "skills",
    },
    {
      id: 4,
      child: (
        <>
          <div className="flex items-center justify-between w-full">
            <span className="ml-2 select-none">Projects</span>
            <FaFolderOpen size={30} />
          </div>
        </>
      ),
      to: "projects",
    },
    {
      id: 5,
      child: (
        <>
          <div className="flex items-center justify-between w-full">
            <span className="ml-2 select-none">Contact</span>
            <FaEnvelopeOpen size={30} />
          </div>
        </>
      ),
      to: "contact",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, to, style }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 cursor-pointer" +
              " " +
              style
            }
          >
            <Link
              to={to}
              smooth
              duration={500}
              className="flex justify-between items-center w-full text-white"
            >
              {child}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBarVertical;
