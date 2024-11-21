import React from 'react';
import Heading from './Heading';
import Card from './Card';
import './Projects.css'; // Import custom CSS

const data = [
  
  {
    id: 0,
    title: "Static Interactive Builder",
    desc: "Built a static resume builder with HTML, CSS, and TypeScript for creating simple, structured resumes.",
    img: "/projects_02.jpg",
    tags: ["HTML", "CSS", "Typescript", "Node"],
  },
  {
    id: 1,
    title: "Figma Designe",
    desc: "A React and Typescript base app Organize daily tasks and work consistently toward long-term goals.Dedicate some time each day to long-term goals.",
    img: "/projects_03.jpg",
    tags: ["Typescript", "CSS", "Node", "HTML"],
  },
];

const Projects = () => {
  return (
    <div id="Projects" className="projects-container">
      <Heading title="My Projects" />
      <div className="projects-grid">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
