import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { RxExternalLink } from 'react-icons/rx';
import projectImage1 from '../assets/Portfolio1.png';

const projectsData = [
  {
    image: projectImage1,
    heading: 'My Project',
    title: 'FOOD-DEL',
    detail: 'FOOD-DEL is a food delivery web page offering a wide selection of cuisines, seamless ordering, real-time tracking, and secure payment options for a convenient dining experience.',
    frontendSkill: 'React, Tailwind, CSS',
    backendSkill: 'Node.js, Express, MongoDB',
    githubLink: 'https://github.com/yourusername/food-del',
    githubIcon: <FaGithub />,
    externalLinkIcon: <RxExternalLink />,
  },
];

const Portfolio1 = () => {
  return (
    <div id="portfolio" className="min-h-screen w-full m-auto text-white mt-20 px-6 py-10 pt-28">
      <div className="flex flex-col text-center items-center gap-5">
        <h1 className="text-4xl max-md:text-3xl font-semibold">Some Things I've Built</h1>
        <div className="h-1 w-52 bg-green-400 rounded-xl mb-14"></div>
      </div>

      <div className=" flex flex-col lg:flex-row lg:px-8 lg:w-4/5 m-auto gap-10 items-center mt-10 bg-slate-950 w-full p-4 hover:scale-105 transition ease-in-out duration-200 shadow-gray-600 shadow-sm">
        {/* left content */}
        <div className="flex justify-center w-full lg:w-auto">
          <div className="box h-[300px] w-full lg:h-[400px] lg:w-[600px] px-6 bg-gray-800 opacity-80 flex items-end relative">
            <h1 className="absolute lg:top-14 top-8 right-6 text-3xl max-sm:text-2xl lg:text-6xl font-semibold opacity-65 hover:opacity-100">FOOD-DEL</h1>
            <h1 className="absolute lg:top-0 top-2 left-6 text-6xl lg:text-9xl opacity-50 hover:opacity-100">01</h1>
            <img
              className="w-full max-sm:aspect-auto h-[230px] lg:w-auto lg:h-auto transition ease-in-out opacity-100"
              src={projectImage1}
              alt="Project"
            />
          </div>
        </div>

        {/* right content */}
        <div className="w-full lg:w-1/2">
          <div>
            {projectsData.map((project, index) => (
              <div key={index} className="project flex flex-col gap-3">
                <p className="text-gray-400 mb-6">{project.heading}</p>

                <h2 className="text-3xl text-green-300 font-bold mb-2">{project.title}</h2>

                <p className="text-sm text-gray-200 opacity-65">{project.detail}</p>
                <p className="text-sm text-blue-200">{project.frontendSkill}</p>
                <p className="text-sm text-blue-200">{project.backendSkill}</p>
                <div className="mt-4 flex gap-5">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-3xl opacity-50 hover:opacity-100">
                    {project.githubIcon}
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-3xl opacity-50 hover:opacity-100">
                    {project.externalLinkIcon}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio1;
