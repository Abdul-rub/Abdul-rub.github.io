import React from "react";
import Men from "../assets/portfolio/Men.png"
import CRUDop from "../assets/portfolio/CRUDop.png"
import ketto from "../assets/portfolio/ketto.png"
import indeed from "../assets/portfolio/indeed.png"

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: indeed,
      title: "Indeed Clone",
      techStack:"REACT| REDUX| FIREBASE| CHAKRA UI",
      desc: "Indeed is an worldwide employment website for job listings. With Indeed, you can search millions of jobs online to find the next step in your career. With tools for job search, resumes, company reviews and more",
      link: "https://indeed-clone68.netlify.app/",
      repo: "https://github.com/RavinderTakda/nifty-deer-6877",
    },
    {
      id: 2,
      src: Men,
      title: "Mytheresa Clone",
      techStack:"HTML|CSS |JS",
      desc: "Mytheresa is an online shopping destination for children's, men's, and women's luxury fashion and lifestyle design",
      link: "https://illustrious-pasca-32510e.netlify.app/",
      repo: "https://github.com/br-lovanshi/mytheresa.com",
    },
    {
      id: 3,
      src: ketto,
      title: "Ketto Clone",
      techStack:"HTML|CSS |JS" ,
      desc: "Ketto is an Online Crowdfunding Platform and Website in India for fundraising of Social, Charity, Movies, Music, Personal and Creative causes.",
      link: "https://effulgent-horse-6e1937.netlify.app/",
      repo: "https://github.com/NarendraKumarSwami/grateful-zebra-4531",
    },
    {
      id: 4,
      src: CRUDop,
      title: "CRUD with React",
      techStack:"HTML|CSS |REACT",
      desc: "It's an Simple CRUD project, we can simply Add,Edit,Read and Delete user data",
      link: "https://myform1.netlify.app/",
      repo: "https://github.com/Abdul-rub/CRUD-Operation-",
    },
  ];

  return (
    <div
      name="projects"
      className="w-full h-100 bg-gradient-to-l from-sky-400 to-indigo-900">
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
                className="rounded-md duration-200 hover:scale-105 h-60 w-full"
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
                  Demo
                </button>
                <button
                  className="w-24 px-6 py-3 m-4 duration-200 hover:scale-105 bg-blue-500 hover:bg-blue-700 text-white font-bold padding-top: 0.5rem padding-bottom: 0.5rem padding-left: 1rem padding-right: 1rem rounded"
                  onClick={() => window.open(repo, "_blank")}>
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
