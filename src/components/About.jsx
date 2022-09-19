import React from "react";

const About = () => {
  return (
    <div 
      name="about"
      className="w-full h-100 bg-black-bg-sky-900 text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
        Proficient in  CODING Passionate about implementing and launching new projects.
         Ability to translate business requirements into technical solutions.
          Looking to start my career as an entry-level software engineer with a reputed
           firm driven by technology.</p>
        <br />
        <p className="text-xl">
        {/* Proficient in  CODING Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions. Looking to start my career as an entry-level software engineer with a reputed firm driven by technology. */}
        </p>
      </div>
    </div>
  );
};

export default About;
