import React, { useState } from "react";

import { StyledProjects } from "../components/styled/styled_pages/Projects.Styled";
import images from "../constants/images";
import ProjectCard from "../components/ProjectCard";
import { projectData } from "../projectData";

const Projects = () => {
  const [active, setActive] = useState("all");

  const toggleActive = (e) => {
    const filter = e.target.textContent;
    setActive(filter);
  };

  const projectCats = ["all", "react", "vanilla"];

  const filterBtns = projectCats.map((item) => {
    return (
      <button
        className={active === item ? "active filter-btn" : "filter-btn"}
        onClick={toggleActive}
        key={item}
      >
        {item}
      </button>
    );
  });

  const allProjects = projectData.map((proj) => (
    <ProjectCard img={proj.img} name={proj.name} tech={proj.tech} />
  ));

  const ReactProjects = projectData.map((proj) => {
    if (proj.tech === "React") {
      return <ProjectCard img={proj.img} name={proj.name} tech={proj.tech} />;
    }
  });

  const vanillaProjects = projectData.map((proj) => {
    if (proj.tech === "HTML, CSS, JS") {
      return <ProjectCard img={proj.img} name={proj.name} tech={proj.tech} />;
    }
  });

  return (
    <StyledProjects>
      <div className="container-filter">{filterBtns}</div>
      {/* {active === "react" ? "REACT" : active === "vanilla" ? "vanilla" : "ALL"} */}

      <div className="container-projects">
        {active === "react"
          ? ReactProjects
          : active === "vanilla"
          ? vanillaProjects
          : allProjects}
      </div>
    </StyledProjects>
  );
};

export default Projects;
