import React from 'react'
// src/projectsData.js
import projectImage1 from '../assets/Portfolio1.png';


const projectsData = [
  {
    image: projectImage1,
    title: 'Project One',
    detail: 'This is the detail of project one.',
    frontendSkill: 'React, HTML, CSS',
    backendSkill: 'Node.js, Express',
    
    
  },
  
];



const Test = () => {
  return (
    <div className='text-white'>
    <h1>My Portfolio</h1>
    <div>
      {projectsData.map((project, index) => (
        <div key={index} className="project">
          <img className='hidden' src={project.image} alt={project.title} />
          <h2>{project.title}</h2>
          <p>{project.detail}</p>
          <p><strong>Frontend Skills:</strong> {project.frontendSkill}</p>
          <p><strong>Backend Skills:</strong> {project.backendSkill}</p>
          
        </div>
      ))}
    </div>
  </div>
  )
}

export default Test
