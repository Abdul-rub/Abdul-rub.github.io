import React from 'react';
import cleverpushlogo from "../assets/cleverpushlogo.jpeg";
import "./style/Experience.css"

const Experience = () => {
  return (
    <div  name="experience" className="w-full bg-black text-white py-10">
      <div className="max-w-screen-lg p-4 mx-auto card-wrapper">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            <span style={{ borderBottom: '2px solid white' }}>Experience</span>
          </p>
        </div>

        <div className='flex items-center'>
          <img src={cleverpushlogo} alt="CleverPush Logo" className="w-10 h-10 mr-5" />
          <h1 className="text-4xl font-bold">
            CleverPush
          </h1>
        </div>
        <p className='text-xl'>(Full Stack Developer)</p>

        <div className="mt-5">
          <p className='text-xl'>Key Responsibilities:</p>
          <ul className="list-disc ml-8 text-lg leading-loose">
            <li>Developing and implementing features based on client requirements and specifications.</li>
            <li>Assisting in bug fixing and issue resolution reported by clients.</li>
            <li>Collaborating with the development team to contribute to the full stack development process.</li>
            <li>Participating in code reviews, testing, and documentation to ensure code quality and project integrity.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
