import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import your images
import project1 from "../assets/project1.jpg";
import project1b from "../assets/project1b.jpg";
import project1c from "../assets/project1c.jpg";
import project1d from "../assets/project1d.jpg";
import project2a from "../assets/project2a.jpg";
import project2b from "../assets/project2b.jpg";


const Portfolio = () => {
  const projects = [
    {
      id: 1,
      images: [project1, project1b, project1c,project1d],
      title: "CI/CD Pipeline for Java Full-Stack Application",
      techStack:
        "JENKINS | MAVEN | SONARQUBE | NEXUS | DOCKER | AWS EKS | HELM | TRIVY",
      desc: "Automated end-to-end CI/CD pipeline using Jenkins, Maven, SonarQube, Nexus, Docker, and AWS EKS. Integrated Trivy vulnerability scanning and implemented RBAC security policies for compliance. Deployed applications with Helm and Kubernetes manifests to ensure scalability and traceability.",
    },
    {
      id: 2,
      images: [project2a, project2b],
      title: "Microservices-Based CI/CD Pipeline on AWS EKS",
      techStack:
        "JENKINS | DOCKER | GITHUB WEBHOOKS | AWS EKS | KUBERNETES | RBAC",
      desc: "Built multibranch Jenkins pipelines with GitHub webhooks for 11 microservices. Containerized services using Docker and deployed images via DockerHub to AWS EKS. Configured Kubernetes RBAC, namespaces, and LoadBalancers for secure and isolated deployments.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div
      name="projects"
      className="w-full bg-gradient-to-l from-sky-400 to-indigo-900 py-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6 text-xl">
            <b>Check out some of my work right here</b>
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-10 px-6 sm:px-0">
          {projects.map(({ id, images, title, desc, techStack }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-700 bg-black rounded-lg overflow-hidden"
            >
              {/* Image Carousel */}
              <Slider {...settings}>
                {images.map((img, index) => (
                  <div key={index} className="flex justify-center">
                    <img
                      src={img}
                      alt={`${title} screenshot ${index + 1}`}
                      className="w-full max-h-[480px] object-contain rounded-t-lg"
                    />
                  </div>
                ))}
              </Slider>

              {/* Text Content */}
              <div className="p-6">
                <h2 className="text-2xl text-slate-200 text-center font-semibold">
                  {title}
                </h2>
                <p className="mt-3 text-slate-300 text-lg leading-relaxed">
                  {desc}
                </p>
                <p className="text-center mt-4 text-slate-300 font-medium text-lg">
                  <span className="font-semibold">Tech Stack:</span> {techStack}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ✅ Custom Arrows for better visibility */
function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} !text-white !right-2 z-10 hover:scale-110 transition-transform duration-200`}
      onClick={onClick}
      style={{
        fontSize: "30px",
        color: "#fff",
        display: "block",
        background: "rgba(255,255,255,0.2)",
        borderRadius: "50%",
        padding: "5px",
      }}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} !text-white !left-2 z-10 hover:scale-110 transition-transform duration-200`}
      onClick={onClick}
      style={{
        fontSize: "30px",
        color: "#fff",
        display: "block",
        background: "rgba(255,255,255,0.2)",
        borderRadius: "50%",
        padding: "5px",
      }}
    />
  );
}

export default Portfolio;
