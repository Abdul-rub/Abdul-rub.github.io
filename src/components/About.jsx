import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-black-bg-sky-900 text-white about py-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
          Highly skilled in cloud computing, DevOps practices, and infrastructure automation with a strong focus on deploying scalable and reliable systems. Experienced in transforming business requirements into robust technical solutions, managing CI/CD pipelines, and optimizing cloud environments. Seeking a DevOps/Cloud Engineer role with a forward-thinking, technology-driven organization. Committed to driving efficiency, reliability, and innovation through my technical expertise and passion for modern cloud technologies.</p>
        <br />
      </div>
    </div>
  );
};

export default About;
