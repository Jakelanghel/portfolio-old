import React from "react";
import { StyledProjectCard } from "./styled/ProjectCard.Styled";
import images from "../constants/images";

const ProjectCard = (props) => {
  return (
    <StyledProjectCard>
      <a
        href="https://jakelanghel.github.io/ecommerce-product-page/"
        className="project-link"
      >
        <img src={props.img} alt={props.name} className="project-img" />
      </a>

      <h2>{props.name}</h2>
      <p>{props.tech}</p>

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
    </StyledProjectCard>
  );
};

export default ProjectCard;
