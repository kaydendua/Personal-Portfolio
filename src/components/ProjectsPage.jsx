import React from "react";
import Reconomy from "../assets/projects/reconomy.png";
import PhotoBooth from "../assets/projects/photobooth.png";
import FakeNews from "../assets/projects/fakenews.png";
import Portfolio from "../assets/projects/portfolio.png";
import TextFighter from "../assets/projects/textfighter.png";
import ObjectDetection from "../assets/projects/objectdetection.png";
import { FaGithub, FaLaptopCode, FaYoutube } from "react-icons/fa";

const Projects = () => {
  const allProjects = [
    {
      id: 1,
      src: PhotoBooth,
      name: "Virtual Photo Booth",
      description:
        "A virtual photo booth coded in Python. It uses a face detection model to display props on users' faces, as well as OpenCV for computer vision. It also changes the background and adds a foreground. The custom-made props, backgrounds and foregrounds can be chosen by the user using keybinds.",
      tags: ["Python, OpenCV, 2024"],
      github: "https://github.com/kaydendua/Virtual-Photo-Booth",
    },
    {
      id: 2,
      src: FakeNews,
      name: "Fake News Detector",
      description:
        "A machine learning model trained in Python. It was trained with a dataset with over 72,000 articles that are classified as either fake or real. The model has an accuracy of over 96%.",
      tags: ["Python, 2023"],
      github: "https://github.com/kaydendua/Fake-news-detector",
    },
    {
      id: 3,
      src: TextFighter,
      name: "Text Fighter",
      description:
        "In an effort to gain a better grasp of object-oriented programming, I used it to code a text fighter in Python. This text fighter has gameplay inspired by UNO, where players draw cards which they can play in order to deal damage. There are also a few special cards, such as the wild card, which allows players to play any card on top of it.",
      tags: ["Python, 2024"],
      github: "https://github.com/kaydendua/UNO-Text-Fighter",
    },
    {
      id: 4,
      src: ObjectDetection,
      name: "AI Object Detection",
      description:
        "I trained an AI model using teachable machine to detect certain objects. This was used as part of a larger project for a prototype search and rescue robot. The robot uses an Arduino and Raspberry Pi which communicate to achieve its functions.",
      tags: ["Python, TeachableMachine, Raspberry Pi, 2024"],
      youtube:
        "https://drive.google.com/file/d/1F4kC-xuh3pQGRhzwfwNzZStvMg6-A5W0/view",
    },
    {
      id: 5,
      src: Reconomy,
      name: "Relectronics",
      description:
        "An app that helps users fix their broken electronics instead of throwing them away or paying a hefty repair fee. It is a community-based platform for users to share solutions and ask questions about tech-related issues.",
      tags: ["Adalo, 2022"],
      demo: "https://previewer.adalo.com/456f6503-bb65-4735-986b-78466b156f27",
    },
    {
      id: 6,
      src: Portfolio,
      name: "Personal Portfolio",
      description:
        "This is a portfolio website built using React and Tailwind CSS, and deployed using Vercel. It was first made using a youtube tutorial, which is linked to the youtube button, and then further customized and expanded upon to fit my preferences.",
      tags: ["React Js, Tailwind CSS, 2024"],
      github: "https://github.com/kaydendua/Personal-Portfolio",
      youtube: "https://www.youtube.com/watch?v=LpZrAjU6Hhk",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black via-gray-800 to-black w-full text-white min-h-screen pb-20"
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full pt-28">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work here.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-auto">
          {allProjects.map(
            ({ id, src, name, description, tags, github, demo, youtube }) => (
              <div
                key={id}
                className="flex flex-col rounded-lg shadow-md shadow-gray-600 mb-8 h-auto"
              >
                <img
                  src={src}
                  alt={`Screenshot of ${name}`}
                  className="w-full h-auto rounded-t-lg object-cover"
                />
                <div className="flex flex-col justify-between p-4 flex-grow">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{name}</h3>
                    <p className="text-gray-300">{description}</p>
                    <div className="mt-2">
                      {tags.map((tag, index) => (
                        <span key={index} className="text-cyan-500 italic mr-2">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2 mt-4">
                    {github && (
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors duration-300"
                        aria-label={`GitHub repository for ${name}`}
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
                        aria-label={`YouTube video for ${name}`}
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
                        aria-label={`Demo for ${name}`}
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
      </div>
    </div>
  );
};

export default Projects;
