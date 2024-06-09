import React, { useState, useEffect } from "react";
import Reconomy from "../assets/projects/reconomy.png";
import PhotoBooth from "../assets/projects/photobooth.png";
import FakeNews from "../assets/projects/fakenews.png";
import Portfolio from "../assets/projects/portfolio.png";
import {
  FaGithub,
  FaArrowRight,
  FaLaptopCode,
  FaYoutube,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const allProjects = [
    {
      id: 1,
      src: Reconomy,
      name: "Relectronics",
      description:
        "An app that helps users fix their broken electronics instead of throwing them away or paying a hefty repair fee. It is a community-based platform for users to share solutions and ask questions about tech-related issues.",
      tags: ["Adalo, 2022"],
      demo: "https://previewer.adalo.com/456f6503-bb65-4735-986b-78466b156f27",
    },
    {
      id: 2,
      src: PhotoBooth,
      name: "Virtual Photo Booth",
      description:
        "A virtual photo booth coded in Python. It uses a face detection model to display props on users' faces. It also changes the background and adds a foreground. The props, backgrounds and foregrounds can be chosen by the user.",
      tags: ["Python, Opencv, 2024"],
      github: "https://github.com/kaydendua/Virtual-Photo-Booth",
    },
    {
      id: 3,
      src: FakeNews,
      name: "Fake News Detector",
      description:
        "A machine learning model trained in Python. It was trained with a dataset with over 72,000 articles that are classified as either fake or real. The model has an accuracy of over 96%.",
      tags: ["Python, 2023"],
      github: "https://github.com/kaydendua/Fake-news-detector",
    },
    {
      id: 4,
      src: Portfolio,
      name: "Personal Portfolio",
      description:
        "This is a portfolio website built using React and Tailwind CSS, and deployed using Vercel. It was first made using a youtube tutorial, which is linked to the youtube button, and then further customized and expanded upon to fit my preferences.",
      tags: ["React Js, Tailwind CSS, 2024"],
      github: "https://github.com/kaydendua/Personal-Portfolio",
      youtube: "https://www.youtube.com/watch?v=LpZrAjU6Hhk",
    },
  ];

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const shuffledProjects = allProjects.sort(() => Math.random() - 0.5);
    setProjects(shuffledProjects.slice(0, 2));
  }, []);

  const shuffleProjects = () => {
    const shuffledProjects = allProjects.sort(() => Math.random() - 0.5);
    setProjects(shuffledProjects.slice(0, 2));
  };

  const navigate = useNavigate();

  const handleSeeMoreClick = () => {
    navigate("/projects");
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map(
            (
              { id, src, name, description, tags, github, demo, youtube },
              index
            ) => (
              <div
                key={id}
                className={`flex items-center rounded-lg shadow-md shadow-gray-600 mb-8 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <img
                  src={src}
                  alt={name}
                  className="w-1/3 h-auto rounded-l-lg object-cover"
                />
                <div
                  className={`w-2/3 p-4 relative ${
                    index % 2 === 0 ? "text-left" : "text-right"
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-2">{name}</h3>
                  <p className="text-gray-300">{description}</p>
                  <div className="mt-2">
                    {tags.map((tag, index) => (
                      <span key={index} className="text-cyan-500 italic mr-2">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div
                    className={`absolute bottom-2 ${
                      index % 2 === 0 ? "right-4" : "left-4"
                    } flex space-x-2`}
                  >
                    {github && (
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors duration-300"
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                    {youtube && (
                      <a
                        href={youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors duration-300"
                      >
                        <FaYoutube size={20} />
                      </a>
                    )}
                    {demo && (
                      <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors duration-300"
                      >
                        <FaLaptopCode size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={handleSeeMoreClick}
            className="px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:scale-110 duration-300 flex items-center"
          >
            See More <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
