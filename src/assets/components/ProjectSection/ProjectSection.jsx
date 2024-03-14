import React from "react";
import Heading from "../Heading/Heading";
import ProjectCard from "../ProjectCard/ProjectCard";
import Button from "../Button/Button";
import "./ProjectSection.css";
import Project1Img from "../../Project1.jpg";
import Project2Img from "../../Project2.jpg";
import Project3Img from "../../Project3.jpg";

const projects = [
  {
    title: "ЖК ПРАВОБЕРЕЖНЫЙ",
    square: 112,
    year: "2023",
    image: Project1Img,
    link: "",
  },
  {
    title: "ЖК НОРВЕЖСКИЙ ПАРК",
    square: 75,
    year: "2023",
    image: Project2Img,
    link: "",
  },
  {
    title: "ЖК СОСНОВСКИЕ ОЗЕРА",
    square: 94,
    year: "2022",
    image: Project3Img,
    link: "",
  },
];

function ProjectSection() {
  function HandleOnClick () {
    alert('получилось')
  }
  
  return (
    <div className="projects" id="projects">
      <Heading tagName="h2" className="projects__title" text="ПРОЕКТЫ" />

      {projects.map(project => (
        <ProjectCard
            title={project.title}
            square={project.square}
            year={project.year}
            link={project.link}
            image={project.image}
        />
      ))}

      <Button onClick={HandleOnClick} className="projects__btn" text="Смотреть все проекты" />
    </div>
  );
}

export default ProjectSection;

// link='https://github.com/polina-novoselova' 