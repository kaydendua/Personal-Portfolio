import React, { useState } from "react";

import reactImage from "../assets/react.png";
import python from "../assets/python.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import vscode from "../assets/vsc.svg";
import davinci from "../assets/davinci.png";
import figma from "../assets/figma.png";
import macos from "../assets/apple.png";

const Skills = () => {
  const [selectedType, setSelectedType] = useState("Language");

  const techs = [
    {
      id: 1,
      src: python,
      title: "Python",
      style: "shadow-yellow-300",
      type: "Language",
    },
    {
      id: 2,
      src: reactImage,
      title: "React",
      style: "shadow-sky-600",
      type: "Language",
    },
    {
      id: 3,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
      type: "Language",
    },
    {
      id: 4,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
      type: "Software",
    },
    {
      id: 5,
      src: vscode,
      title: "Visual Studio Code",
      style: "shadow-cyan-500",
      type: "Software",
    },
    {
      id: 6,
      src: figma,
      title: "Figma",
      style: "shadow-rose-500",
      type: "Software",
    },
    {
      id: 7,
      src: davinci,
      title: "Davinci Resolve",
      style: "shadow-sky-800",
      type: "Software",
    },
    {
      id: 8,
      src: macos,
      title: "MacOS",
      style: "shadow-gray-400",
      type: "Software",
    },
  ];

  const filteredTechs =
    selectedType === "All"
      ? techs
      : techs.filter((tech) => tech.type === selectedType);

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="flex justify-center mb-8">
          <button
            className={`mx-2 px-4 py-2 ${
              selectedType === "Language"
                ? "bg-gradient-to-r from-cyan-800 to-blue-800"
                : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 duration-100"
            } rounded`}
            onClick={() => setSelectedType("Language")}
          >
            Languages
          </button>
          <button
            className={`mx-2 px-4 py-2 ${
              selectedType === "Software"
                ? "bg-gradient-to-r from-cyan-800 to-blue-800"
                : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 duration-100"
            } rounded`}
            onClick={() => setSelectedType("Software")}
          >
            Software
          </button>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {filteredTechs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
