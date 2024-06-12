import React, { useState } from "react";

const Experience = () => {
  const [type, setType] = useState("education");

  const experiences = [
    {
      id: 1,
      type: "education",
      title: "Integrated Diploma Programme (IDP)",
      company: "School of Science and Technology, Singapore",
      date: "January 2023 - December 2024",
      description:
        "I am part of the 1st batch of IDP students, which gave me many opportunities, such as working with SST's industry partners, and learning about technopreneurship.",
    },
    {
      id: 2,
      type: "education",
      title: "Student",
      company: "School of Science and Technology, Singapore",
      date: "January 2021 - December 2024",
      description:
        "At SST, my CCA was the Singapore Youth Flying Club and I joined SST Inc, an ICT talent development programme and startup incubator. I took the Computing+ applied subject.",
    },
    {
      id: 3,
      type: "education",
      title: "Student",
      company: "Fuhua Primary School",
      date: "January 2015 - December 2020",
      description: "I graduated with a PSLE score of 259.",
    },
    {
      id: 1,
      type: "experience",
      title: "HCI Sieberrsec CTF",
      company: "Hwa Chong Institution",
      date: "March 2024",
      description:
        "I competed in the HCI Sieberrsec CTF with 3 teammates, which was a 12-hour long competition where we had to solve cybersecurity-related challenges. It was a great experience and my team managed to place 8th out of over 50 teams.",
    },
    {
      id: 2,
      type: "experience",
      title: "SST-SUTD Big D Camp",
      company: "Singapore University of Technology and Design",
      date: "January 2024",
      description:
        "I participated in this 3 day camp where my group had to make a prototype product. The theme was assistive technology, and my group created a cup holder that would prevent cups from spilling in order to help people with shaky hands. We had to overcome many challenges to finish the product, such as the short 3-day time peoriod, and the unreliability of the 3D printers we were using. In the end, we were successful and won the innovative creator award.",
    },
    {
      id: 3,
      type: "experience",
      title: "Work Attachment",
      company: "Tribe",
      date: "November 2023",
      description:
        "As part of the IDP Structured Work Attachment and Research Programme, I was given the opportunity to job shadow at Tribe. During my time there, I gained an intimate understanding of the inner workings at a startup, and learnt more about Web3 and StackUp. I was assigned to research on developer communities in the Asia-Pacific region, and presented my findings to them. Overall, It was an eye-opening experience that I am grateful for.",
    },
    {
      id: 1,
      type: "service learning",
      title: "Volunteer",
      company: "Willing Hearts",
      date: "March 2024",
      description:
        "As part of a class-initiated service learning project, I was a volunteer at Willing Hearts, which operates a soup kitchen that prepares and distributes meals. During my time there, I washed food trays and chopped vegetables for cooking.",
    },
    {
      id: 2,
      type: "service learning",
      title: "Community Engagement Seniors' Visitation",
      company: "Heartware Network",
      date: "October 2023",
      description:
        "As part of the IDP programme, I participated in a community engagement programme run by Heartware Network. I visited homes of seniors and befriended and talked to them.",
    },
    {
      id: 3,
      type: "service learning",
      title: "Beach Cleanup",
      company: "East Coast Park",
      date: "March 2023",
      description:
        "As part of a class-initiated service learning project, my classmates and I went to East Coast Park to pick up garbage. We split into multiple teams, and each went to different parts of the beach to clean up.",
    },
  ];

  const filteredExperiences = experiences.filter(
    (experience) => experience.type === type
  );

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="mb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            My Journey
          </p>
          <div className="pt-8">
            <ul className="flex">
              <li
                className={`mr-4 cursor-pointer ${
                  type === "education"
                    ? "text-white duration-100"
                    : "text-gray-400 hover:scale-105 duration-100"
                }`}
                onClick={() => setType("education")}
              >
                Education
              </li>
              <li
                className={`mr-4 cursor-pointer ${
                  type === "experience"
                    ? "text-white duration-100"
                    : "text-gray-400 hover:scale-105 duration-100"
                }`}
                onClick={() => setType("experience")}
              >
                Experience
              </li>
              <li
                className={`mr-4 cursor-pointer ${
                  type === "service learning"
                    ? "text-white duration-100"
                    : "text-gray-400 hover:scale-105 duration-100"
                }`}
                onClick={() => setType("service learning")}
              >
                Service Learning
              </li>
            </ul>
          </div>
        </div>

        <div className="relative">
          <div className="border-r-2 border-gray-500 absolute h-full top-0 left-7 md:left-16"></div>
          {filteredExperiences.map((experience) => (
            <div
              key={experience.id}
              className="mb-8 ml-16 md:ml-24 relative pl-8"
            >
              <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -left-1.5 border border-white"></div>
              <h3 className="text-lg font-semibold text-white">
                {experience.title}
              </h3>
              <p className="font-medium text-gray-300">{experience.company}</p>
              <p className="text-sm mb-4 text-gray-400">{experience.date}</p>
              <p className="text-gray-200">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
