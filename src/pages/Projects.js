import React, { useState } from "react";

import { StyledProjects } from "../components/styled/styled_pages/Projects.Styled";
import images from "../constants/images";

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
      {/* {active === "react" ? "REACT" : active === "vanilla" ? "vanilla" : "ALL"} */}

      <a
        href="https://jakelanghel.github.io/ecommerce-product-page/"
        className="project-link"
      >
        <div className="container-projects">
          <div className="container-project">
            <img
              src={images.f_mentorEcommerce}
              alt="ecommerce product page"
              className="project-img"
            />
            <h2>Ecommerce product page</h2>
            <p>React - Styled components</p>

            <div className="container-links">
              <a
                className="repo-link"
                href="https://jakelanghel.github.io/ecommerce-product-page/"
              >
                Live Site
              </a>
              <a
                className="repo-link"
                href="https://github.com/Jakelanghel/ecommerce-product-page"
              >
                Github Repo
              </a>
            </div>
          </div>
        </div>
      </a>
    </StyledProjects>
  );
};

export default Projects;
