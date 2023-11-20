import React from "react";
// import Men from "../assets/portfolio/Men.png"
import razorpay from "../assets/portfolio/razorpay.png"
// import ketto from "../assets/portfolio/ketto.png"
// import indeed from "../assets/portfolio/indeed.png"
import BlogApp from "../assets/portfolio/BlogApp.png"
import H4HOLIDAY from "../assets/H4HOLIDAY.png"
import boAt from "../assets/boAt.png"
import speechtotext from "../assets/speechtotext.png"
import groupchat from "../assets/groupchat.png"

const Portfolio = () => {
  const projects = [

    {
      id: 1,
      src: groupchat,
      title: "ChatApp with Socket.io",
      techStack:"REACT| SOCKET.IO| NODEJS| CHAKRA UI",
      desc: "Advanced ChatApp with feature like One on One Chat, Group Chat, Update group and search users",
      link: "https://655b7c0634e0762bbb2c6a8b--stirring-bubblegum-adf486.netlify.app/",
      repo: "https://github.com/Abdul-rub/Chat-App",
    },

    {
      id: 2,
      src: boAt,
      title: "Boat Clone",
      techStack:"REACT| CHAKRA UI ",
      desc: "It's a clone of boAt speaker, audio accessories website where users can buy products",
      link: "https://glowing-dusk-64e33d.netlify.app/",
      repo: "https://github.com/Abdul-rub/BoAt-Clone",
    },

    {
      id: 3,
      src: H4HOLIDAY,
      title: "Hotel-Booking App",
      techStack:"REACT| NODEJS | MONGODB | EXPRESSJS | BOOTSTRAP",
      desc: "The Hotel Booking App is a web-based application built on the MERN (MongoDB, Express, React, Node.js) stack.",
      link: "https://h4-holiday-uhor.vercel.app/",
      repo: "https://github.com/Abdul-rub/H4Holiday",
    },
    {
      id: 4,
      src: BlogApp,
      title: "Multi-User-BlogApp",
      techStack:"REACT| REDUX| NODEJS | MONGODB | EXPRESSJS | CHAKRA UI",
      desc: "It's a Multi-user (MERN) Blog app where anyone can create an account and have their specific blog.",
      link: "https://abdul-multi-user-blog-app.netlify.app/",
      repo: "https://github.com/Abdul-rub/Multi-User-Blog-App",
    },
    {
      id: 5,
      src: razorpay,
      title: "Payment Integration",
      techStack:"REACT| CHAKRA UI | NODEJS | MONGODB | EXPRESSJS | RAZORPAY",
      desc: "Simple Payemnt Integration using RazorPay",
      link: "https://wonderful-nasturtium-00ca4b.netlify.app/",
      repo: "https://github.com/Abdul-rub/RazorPay_Payment_Integration",
    },

    {
      id: 6,
      src: speechtotext,
      title: "Speech To Text Converter",
      techStack:"REACT",
      desc: "Simple speech to text converter with 100+ language support, Just start speaking It'll convert it into text format",
      link: "https://cool-cat-6f39ef.netlify.app/",
      repo: "https://github.com/Abdul-rub/Voice-To-Text",
    },


    // {
    //   id: 7,
    //   src: Men,
    //   title: "Mytheresa Clone",
    //   techStack:"HTML|CSS |JS",
    //   desc: "Mytheresa is an online shopping destination for children's, men's, and women's luxury fashion and lifestyle design",
    //   link: "https://illustrious-pasca-32510e.netlify.app/",
    //   repo: "https://github.com/br-lovanshi/mytheresa.com",
    // },

  ];

  return (
    <div
      name="projects"
      className="w-full h-100 bg-gradient-to-l from-sky-400 to-indigo-900 py-10">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6 text-xl"><b>Check out some of my work right here</b></p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, link, repo,title,desc,techStack }) => (
            <div key={id} className="shadow-md shadow-gray-600 bg-black rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105 h-60 w-full  object-cover"
              />
              <div className="text-2xl text-slate-300 text-center">{title}</div>
              <div className="mt-2 p-4 text-slate-300 text-lg">{desc}</div>
              <p className="text-center pt-4 text-slate-300	font-medium	text-xl	">Tech Stack: 
              {techStack}</p>

                
              <div className="flex items-center justify-center">
                <button
                  className="w-24 padding-left: 1.5rem padding-right: 1.5rem/ pl-4  padding-top: 0.75rem
                  padding-bottom: 0.75rem m-4 duration-200 hover:scale-105 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                  onClick={() => window.open(link, "_blank")}>
                  Live
                </button>
                <button
                  className="w-24 padding-left: 1.5rem padding-right: 1.5rem/ pl-4  padding-top: 0.75rem
                  padding-bottom: 0.75rem m-4 duration-200 hover:scale-105 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => window.open(repo, "_blank")}>
                  Github
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
