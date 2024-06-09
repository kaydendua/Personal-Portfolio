import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-3">
          Hi! I'm <b>Kayden Dua</b>, a 16 year-old student at the{" "}
          <b>School of Science and Technology, Singapore</b>. I am passionate
          about coding, and I like finding creative solutions to challenging
          problems. Besides programming, I am also interested in{" "}
          <b>technopreneurship</b>.
        </p>

        <br />

        <p className="text-xl">
          I am most experienced in the <b>Python</b> language, which I learnt
          through the Computing+ subject at my school. I have also worked with{" "}
          <b>HTML</b>, <b>CSS</b>, and <b>Javascript</b>, and have been a part
          of several projects involving <b>machine learning</b> and{" "}
          <b>computer vision</b>.
        </p>

        <br />

        <p className="text-xl">
          I am keen to pursue a career in the field of software engineering and
          web development. I hope to continuously learn more about programming
          and build my skills.
        </p>
      </div>
    </div>
  );
};

export default About;
