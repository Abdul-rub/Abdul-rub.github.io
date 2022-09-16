import React from "react";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-scroll";
import abdulimage from "../assets/abdulimage.jpg"
import resume from "../assets/resume.pdf"

const Home = () => {
  return (
    <div  style={{height:"auto",border:"1px solid red", marginTop:"auto" }}
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 home"
    >
      <div style={{height:"100",border:"1px solid blue",marginTop:"70px" }} className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="small-screen hidden mt-10 mx-10">
          <img
            src={abdulimage}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I love to build websites and desgining software.
            I love to work on web application using technologies like
            React, and Redux.
          </p>

          <div className="portfolio-btn">
          <a href={resume} download>
            <div className="portfolio-btn">

              <div
                to="/"
                smooth
                duration={500}
                className="group text-white  w-fit px-6 py-3 my-2 flex items-center rounded-md m-auto  bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Resume
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </div>

            </div>
          </a>
          </div>
        </div>
        <div className="big-screen">
          <img style={{border:"1px solid green"}}
            src={abdulimage}
            alt="profile"
            className="p-20 w-100 h-90 rounded-full "
          />
        </div>
        
      </div>
    </div>
  );
};

export default Home;
