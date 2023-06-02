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
          Highly skilled in coding with a strong focus on implementing
          and launching innovative projects. Demonstrated ability to
          transform business requirements into effective technical
          solutions. Seeking an entry-level software engineering position
          with a renowned technology-driven firm. Committed to
          contributing to the organization's success through my technical
          expertise and passion for cutting-edge technology.</p>
        <br />
      </div>
    </div>
  );
};

export default About;
