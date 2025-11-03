import React from "react";
import Linux from "../assets/Linux.jpg";
import Docker from "../assets/Docker.png";
import K8 from "../assets/K8.png";
import aws from "../assets/aws.png";
import bash from "../assets/Bash.png";
import git from "../assets/git.png";
import grafana from "../assets/Grafana.png";
import jenkins from "../assets/Jenkins.jpeg";
import network from "../assets/network.png";
import terraform from "../assets/terraform.png";
import python from "../assets/python.png";
import javascript from "../assets/javascript.png";
const Skills = () => {
  // const techs = [
  //   {
  //     id: 1,
  //     src: html,
  //     title: "HTML",
  //     style: "shadow-orange-500",
  //   },
  //   {
  //     id: 2,
  //     src: css,
  //     title: "CSS",
  //     style: "shadow-blue-500",
  //   },
  //   {
  //     id: 3,
  //     src: javascript,
  //     title: "JavaScript",
  //     style: "shadow-yellow-500",
  //   },
  //   {
  //     id: 4,
  //     src: reactImage,
  //     title: "React",
  //     style: "shadow-blue-600",
  //   },
  //   {
  //     id: 5,
  //     src: github,
  //     title: "GitHub",
  //     style: "shadow-gray-400",
  //   },
  //   {
  //     id: 6,
  //     src: tailwind,
  //     title: "Tailwind",
  //     style: "shadow-sky-400",
  //   },
  //   {
  //     id: 12,
  //     src: redux,
  //     title: "Redux",
  //     style: "shadow-purple-500",
  //   },
  //   {
  //     id: 13,
  //     src: dataS,
  //     title: "Data Structure",
  //     style: "shadow-red-500",
  //   },
  //   {
  //     id: 14,
  //     src: mongodb,
  //     title: "MongoDB",
  //     style: "shadow-green-500",
  //   },
  //   {
  //     id: 14,
  //     src: node,
  //     title: "Node js",
  //     style: "shadow-green-500",
  //   },
  //   {
  //     id: 14,
  //     src: express,
  //     title: "Express",
  //     style: "shadow-gray-400",
  //   },
  //   {
  //     id: 14,
  //     src: softS,
  //     title: "Soft skills",
  //     style: "shadow-blue-500",
  //   },
  // ];
        const devopsSkills = [
  { id: 1, src: Linux, title: "Linux/Unix", style: "shadow-red-500" },
  { id: 2, src: Docker, title: "Docker", style: "shadow-blue-500" },
  { id: 3, src: K8, title: "Kubernetes", style: "shadow-purple-500" },
  { id: 4, src: aws, title: "AWS", style: "shadow-orange-400" },
  // { id: 5, src: "", title: "Azure", style: "shadow-blue-400" },
  // { id: 6, src: "", title: "GCP", style: "shadow-green-500" },
  { id: 7, src: terraform, title: "Terraform", style: "shadow-gray-400" },
  // { id: 8, src: "", title: "Ansible", style: "shadow-red-400" },
  { id: 9, src:  jenkins, title: "CI/CD (Jenkins/GitHub)", style: "shadow-pink-500" },
  { id: 10, src: grafana, title: "Monitoring (Prometheus/Grafana)", style: "shadow-green-400" },
  { id: 11, src: bash, title: "Scripting (Bash/Python)", style: "shadow-yellow-400" },
  { id: 12, src: git, title: "Version Control (Git)", style: "shadow-gray-500" },
  { id: 13, src: network, title: "Networking & Security", style: "shadow-blue-600" },
  { id: 14, src: python, title: "Python", style: "shadow-indigo-400" },
  { id: 5, src: javascript, title: "Javascript", style: "shadow-blue-400" },
];

  return (
    <div
      name="skills"
      className=" w-full h-100  bg-black text-white ptop py-10"
    >
      <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className=" text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">
            These are the technologies I've worked with and used them in my
            projects.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {devopsSkills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
