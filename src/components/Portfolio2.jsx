import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { RxExternalLink } from 'react-icons/rx';
import projectImage1 from '../assets/Portfolio1.png';

const Portfolio2 = () => {
  const projectsData = [
    {
      image: projectImage1,
      heading: 'Personal Project',
      title: 'NSXMOVIES',
      detail: 'NSXMOVIES: Manage your movie watchlist, discover new films, track watched movies, and explore detailed movie information easily.',
      frontendSkill: 'React, Tailwind, CSS',
      backendSkill: 'Local Storage',
      githubLink: 'https://github.com/yourusername/food-del',
      externalLink: 'https://example.com/food-del',
      githubIcon: <FaGithub />,
      externalLinkIcon: <RxExternalLink />,
    },
  ];

  return (
    <div id="portfolio" className="min-h-full w-full m-auto text-white px-6 lg:mt-24">
      

      <div className="flex flex-col  lg:flex-row-reverse lg:px-8 lg:w-4/5 m-auto gap-10 items-center mt-10 bg-slate-950 w-full p-4 hover:scale-105 transition ease-in-out duration-200 shadow-gray-600 shadow-sm">
        {/* left content */}
        <div className="flex justify-center w-full lg:w-auto">
          <div className="box h-[300px] w-full lg:h-[400px] lg:w-[600px] px-6 bg-gray-800 opacity-70 flex items-end relative">
            <h1 className="absolute lg:top-14 top-8 right-6 text-3xl max-sm:text-2xl lg:text-6xl font-semibold opacity-65 hover:opacity-100">NSXMOVIES</h1>
            <h1 className="absolute tlg:top-0 top-2 left-6 text-6xl lg:text-9xl opacity-50 hover:opacity-100">02</h1>
            <img
              className="w-full h-[230px]  lg:w-auto lg:h-auto transition ease-in-out "
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

                <h2 className="text-3xl text-purple-300 font-bold mb-2">{project.title}</h2>

                <p className="text-sm text-gray-200 opacity-65">{project.detail}</p>
                <p className="text-sm text-blue-200">{project.frontendSkill}</p>
                <p className="text-sm text-blue-200">{project.backendSkill}</p>
                <div className="mt-4 flex gap-5">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-3xl opacity-50 hover:opacity-100">
                    {project.githubIcon}
                  </a>
                  <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className="text-3xl opacity-50 hover:opacity-100">
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

export default Portfolio2;
