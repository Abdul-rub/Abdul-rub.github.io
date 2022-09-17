import React from "react";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-scroll";
import abdulimage from "../assets/abdulimage.jpg"
import resume from "../assets/resume.pdf"

const Home = () => {
  return (
    <div  
      name="home"
      className="h-screen w-full  bg-sky-900 home"
    >
      <div style={{height:"100"}} className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="small-screen hidden mt-10 mx-10">
          <img
            src={abdulimage}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm  <span className="text-black" >Abdul Rub</span> <p className="">Full Stack Web Developer</p>
          </h2>
          <p className="text-black	 font-bold text-xl  py-4 max-w-md">
            I love to build websites and desgining software.
            I love to work on web application using technologies like
            React, and Redux.
          </p>
          <a href={resume} download>
            <div className="portfolio-btn">

              <div
                to="/"
                smooth
                duration={500}
                className="group text-white  w-fit px-6 py-3 my-2 flex items-center rounded-md m-auto  bg-black cursor-pointer">
                Resume
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </div>

            </div>
          </a>
       
        </div>
        <div className="big-screen">
          <img 
            src={abdulimage}
            alt="profile"
            className="p-10 w-100 h-90 rounded-full"
          />
        </div>
        
      </div>
    </div>
  );
};

export default Home;
