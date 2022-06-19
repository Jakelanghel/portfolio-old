import React, { useState } from "react";

import { StyledProjects } from "../components/styled/styled_pages/Projects.Styled";

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

  return (
    <StyledProjects>
      <div className="container-filter">{filterBtns}</div>
    </StyledProjects>
  );
};

export default Projects;
