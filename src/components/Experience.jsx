import React from 'react';
import digitalSherpaLogo from "../assets/DS.png";
import shilviaLogo from "../assets/shivila.jpg";
import "./style/Experience.css";

const Experience = () => {
  return (
    <div name="experience" className="w-full bg-black text-white py-10">
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            <span style={{ borderBottom: '2px solid white' }}>Experience</span>
          </p>
        </div>

        {/* DigitalSherpa Experience */}
        <div className="p-6 rounded-lg shadow-md mb-8 border border-gray-700">
          <div className='flex items-center'>
            <img src={digitalSherpaLogo} alt="DigitalSherpa Logo" className="w-10 h-10 mr-5" />
            <h1 className="text-2xl font-bold">DigitalSherpa</h1>
          </div>
          <p className='text-xl'>(Software Developer | DevOps & Cloud Engineer)</p>
          <p className='text-lg italic'>Jan 2024 - Oct 2025 | Kolkata, West Bengal</p>
          <div className="mt-3">
            <p className='text-xl'>Key Responsibilities & Achievements:</p>
            <ul className="list-disc ml-8 text-lg leading-loose">
              <li>Built and maintained CI/CD pipelines using Jenkins and Docker for reliable deployments.</li>
              <li>Developed Reca Bot, a serverless WhatsApp chatbot using Node.js and AWS Lambda, improving recruiter efficiency.</li>
              <li>Managed and optimized AWS workloads (Lambda, EC2, DynamoDB, CloudWatch), improving uptime by 20%.</li>
              <li>Designed and deployed container images using Docker and integrated monitoring via CloudWatch.</li>
              <li>Implemented Infrastructure as Code (Terraform, YAML) for scalable and automated cloud infrastructure.</li>
            </ul>
          </div>
        </div>

        {/* Shilvia Technology Experience */}
        <div className="p-6 rounded-lg shadow-md border border-gray-700">
          <div className='flex items-center'>
            <img src={shilviaLogo} alt="Shilvia Technology Logo" className="w-10 h-10 mr-5" />
            <h1 className="text-2xl font-bold">Shilvia Technology</h1>
          </div>
          <p className='text-xl'>(Freelance Full-Stack Developer & DevOps)</p>
          <p className='text-lg italic'>Jul 2023 - Dec 2023 | Remote</p>
          <div className="mt-3">
            <p className='text-xl'>Key Responsibilities & Achievements:</p>
            <ul className="list-disc ml-8 text-lg leading-loose">
              <li>Developed full-stack applications using Node.js and React and integrated REST APIs.</li>
              <li>Deployed applications to cloud environments (EC2, S3) and managed basic CI/CD tasks.</li>
              <li>Collaborated with clients to gather requirements, iterate features, and deliver MVPs.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
