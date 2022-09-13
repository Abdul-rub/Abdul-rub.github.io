import React from "react";
import Men from "../assets/portfolio/Men.png"
import CRUDop from "../assets/portfolio/CRUDop.png"
import ketto from "../assets/portfolio/ketto.png"

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: Men,
      title: "Mytheresa Clone",
      link: "https://illustrious-pasca-32510e.netlify.app/",
      repo: "https://github.com/br-lovanshi/mytheresa.com",
    },
    {
      id: 2,
      src: ketto,
      title: "Ketto Clone",
      link: "https://effulgent-horse-6e1937.netlify.app/",
      repo: "https://github.com/NarendraKumarSwami/grateful-zebra-4531",
    },
    {
      id: 3,
      src: CRUDop,
      title: "CRUD with React",
      link: "https://myform1.netlify.app/",
      repo: "https://github.com/Abdul-rub/CRUD-Operation-",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, link, repo,title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div>{title}</div>
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(link, "_blank")}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(repo, "_blank")}
                >
                  GitHub
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
