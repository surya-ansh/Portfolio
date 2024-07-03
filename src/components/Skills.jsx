import React, { useState } from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaDatabase, FaGit, FaGithub, FaNpm } from 'react-icons/fa';
import { RiNextjsLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPostman } from "react-icons/si";
// import { SiTypescript, SiTailwindcss, SiNextDotJs, SiPostgresql, SiPostman } from 'react-icons/si';

const frontendSkills = [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3 /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Next.js', icon: <RiNextjsLine /> },
    { name: 'Responsive Web App', icon: <FaReact /> }, // Using React icon as placeholder
];

const backendSkills = [
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express', icon: <FaJs /> }, // Using JavaScript icon as Express icon
    { name: 'MongoDB', icon: <FaDatabase /> },
    { name: 'Mongoose', icon: <FaDatabase /> }, // Using Database icon as Mongoose icon
    { name: 'Postgres SQL', icon: <BiLogoPostgresql /> },
];

const otherSkills = [
    { name: 'Git', icon: <FaGit /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'npm', icon: <FaNpm /> },
    // { name: 'C++', icon: <SiCpp /> },
    { name: 'Postman', icon: <SiPostman /> },
];

const Skills = () => {
    const [selectedCategory, setSelectedCategory] = useState('frontend');

    const renderSkillsList = (skills) => (
        <ul className="pl-5 flex flex-wrap gap-4 justify-center">
            {skills.map((skill, index) => (
                <li key={index} className="text-white flex items-center">
                    <span className="mr-2">{skill.icon}</span>
                    <span>{skill.name}</span>
                </li>
            ))}
        </ul>
    );

    return (
        <div className="text-white flex flex-col items-center px-4 lg:px-36 mt-6">
            <div className="text-center mb-8">
                <h1 className="font-semibold text-4xl mb-4">My Skills</h1>
                <div className="h-1 w-32 bg-green-400 rounded-xl mb-4 mx-auto"></div>
            </div>

            <div className="flex justify-center mb-8 flex-wrap gap-4">
                <button
                    className={`px-4 py-2 ${selectedCategory === 'frontend' ? 'bg-green-400' : 'bg-gray-700'} rounded-lg`}
                    onClick={() => setSelectedCategory('frontend')}
                >
                    Frontend
                </button>
                <button
                    className={`px-4 py-2 ${selectedCategory === 'backend' ? 'bg-green-400' : 'bg-gray-700'} rounded-lg`}
                    onClick={() => setSelectedCategory('backend')}
                >
                    Backend
                </button>
                <button
                    className={`px-4 py-2 ${selectedCategory === 'other' ? 'bg-green-400' : 'bg-gray-700'} rounded-lg`}
                    onClick={() => setSelectedCategory('other')}
                >
                    Other Skills
                </button>
            </div>

            <div className="w-full flex justify-center">
                {selectedCategory === 'frontend' && (
                    <div className="skills-box p-4 border-2 border-gray-600 flex items-center justify-center text-center w-full lg:w-auto">
                        {renderSkillsList(frontendSkills)}
                    </div>
                )}
                {selectedCategory === 'backend' && (
                    <div className="skills-box p-4 border-2 border-gray-600 flex items-center justify-center text-center w-full lg:w-auto">
                        {renderSkillsList(backendSkills)}
                    </div>
                )}
                {selectedCategory === 'other' && (
                    <div className="skills-box p-4 border-2 border-gray-600 flex items-center justify-center text-center w-full lg:w-auto">
                        {renderSkillsList(otherSkills)}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Skills;
