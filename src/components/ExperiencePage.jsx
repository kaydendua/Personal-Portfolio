import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import TribeGroupPhoto1 from "../assets/experiences/TribeGroupPhoto1.jpg";
import TribeGroupPhoto2 from "../assets/experiences/TribeGroupPhoto2.jpg";
import TribePresentation from "../assets/experiences/TribePresentation.jpg";
import SUTDCamp1 from "../assets/experiences/SUTDCamp1.jpg";
import SUTDCamp2 from "../assets/experiences/SUTDCamp2.jpg";
import SUTDCamp3 from "../assets/experiences/SUTDCamp3.jpg";
import SUTDCamp4 from "../assets/experiences/SUTDCamp4.jpg";
import Sieberrsec1 from "../assets/experiences/Sieberrsec1.jpg";
import Sieberrsec2 from "../assets/experiences/Sieberrsec2.png";
import Technopreneurship1 from "../assets/experiences/Technopreneurship1.jpeg";
import Technopreneurship2 from "../assets/experiences/Technopreneurship2.jpeg";
import Technopreneurship3 from "../assets/experiences/Technopreneurship3.jpg";
import ARTC1 from "../assets/experiences/ARTC1.png";
import ARTC2 from "../assets/experiences/ARTC2.png";
import ARTC3 from "../assets/experiences/ARTC3.png";
import ARTC4 from "../assets/experiences/ARTC4.png";
import ARTC5 from "../assets/experiences/ARTC5.png";
import ARTC6 from "../assets/experiences/ARTC6.png";

const ExperiencePage = () => {
  const experiences = [
    {
      id: 1,
      title: "SMU-SST Technopreneurship Programme",
      company: "Singapore Management University",
      date: "March 2024 - June 2024",
      description:
        "As part of a collaboration between SMU and SST, I was part of a technopreneurship workship culminating in a two-day hackathon. Throughout the workshop, conducted by several technopreneurs from successful startups, I learnt a lot about technopreneurship and what its like. What I found especially insightful was a session where we had a dialogue with the technopreneurs. They answered many of our questions, giving us thoughtful advice. The hackathon was a fun and challenging experience, as we had to develop a product within the short timeframe. I learnt about the many considerations when developing a product, and the importance of a business plan.",
      images: [Technopreneurship1, Technopreneurship2, Technopreneurship3],
    },
    {
      id: 2,
      title: "HCI Sieberrsec CTF",
      company: "Hwa Chong Institution",
      date: "March 2024",
      description:
        "I competed in the HCI Sieberrsec CTF with 3 teammates, which was a 12-hour long competition where we had to solve cybersecurity-related challenges. It was a great experience and my team managed to place 8th out of over 50 teams. I had never participated in a competition like this before, as the competition was very long and we were all participating from our homes. It was a fresh experience, and I am excited to participate in more CTFs in the future.",
      images: [Sieberrsec1, Sieberrsec2],
    },
    {
      id: 3,
      title: "SST-SUTD Big D Camp",
      company: "Singapore University of Technology and Design",
      date: "January 2024",
      description:
        "I participated in this 3-day camp where my group had to make a prototype product. The theme was assistive technology, and my group created a cup holder that would prevent cups from spilling in order to help people with shaky hands, as shaky hands is a syndrome of Parkinson's disease. We had to overcome many challenges to finish the product, such as the short 3-day time peoriod, and the unreliability of the 3D printers we were using. In the end, we were successful and won the innovative creator award.",
      images: [SUTDCamp1, SUTDCamp2, SUTDCamp3, SUTDCamp4],
    },
    {
      id: 4,
      title: "Tribe Work Attachment",
      company: "Tribe",
      date: "November 2023",
      description:
        "As part of the IDP Structured Work Attachment and Research Programme, I was given the opportunity to job shadow at Tribe. During my time there, I gained an intimate understanding of the inner workings at a startup, and learnt more about Web3 and StackUp. I was assigned to research on developer communities in the Asia-Pacific region, and to write a report and give a presentation about my findings. Overall, It was an eye-opening experience that I am grateful for.",
      images: [TribeGroupPhoto1, TribeGroupPhoto2, TribePresentation],
    },
    {
      id: 5,
      title: "ARTC-SST Innovation Camp",
      company: "ARTC",
      date: "May 2023 - June 2023",
      description:
        "I participated in a 3-day camp where my group had to create a prototype product. My group created an automatic plastic bottle cleaning device to prevent contamination of recycling bins. To prepare us for the camp, we went on several learning journeys, such as going to carousell and A*STAR and listening to various talks. In order to create the prototype, I had to learn how to work with arduino. It was a fun experience and I learnt a lot.",
      images: [ARTC1, ARTC2, ARTC3, ARTC4, ARTC5, ARTC6],
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black via-gray-800 to-black w-full text-white pt-20 flex justify-center"
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          {" "}
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            My Experiences
          </p>
          <p className="py-6">Check out my experiences here</p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {experiences.map(
            ({ id, title, company, date, description, images }, index) => (
              <ExperienceItem
                key={id}
                title={title}
                company={company}
                date={date}
                description={description}
                images={images}
                isTextRight={index % 2 !== 0}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

const ExperienceItem = ({
  title,
  company,
  date,
  description,
  images,
  isTextRight,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col md:flex-row items-center rounded-lg shadow-md shadow-gray-600 mb-8 w-full">
      <div
        className={`w-full md:w-2/3 p-4 text-center ${
          isTextRight ? "md:text-right" : "md:text-left"
        }`}
      >
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-gray-400">{company}</p>
        <p className="text-cyan-500 italic">{date}</p>
        <p className="text-gray-300 mt-2">{description}</p>
      </div>
      {images && images.length > 0 && (
        <div
          className={`w-full order-first md:w-1/3 ${
            isTextRight ? "md:order-first" : "md:order-last"
          } relative`}
        >
          <div className="w-full h-64 mx-auto overflow-hidden rounded-lg relative">
            <img
              src={images[currentImageIndex]}
              alt={title}
              className="w-full h-full object-contain"
            />
            <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
              <button
                onClick={handlePrevImage}
                className="bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition-colors"
              >
                <FaArrowLeft className="text-white" />
              </button>
              <button
                onClick={handleNextImage}
                className="bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition-colors"
              >
                <FaArrowRight className="text-white" />
              </button>
            </div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`mx-1 rounded-full w-3 h-3 ${
                    index === currentImageIndex
                      ? "bg-gray-500 border-2 border-white"
                      : "bg-gray-500"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperiencePage;
