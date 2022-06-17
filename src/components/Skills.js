import React from "react";
import { StyledSkills } from "./styled/Skills.Styled";
import images from "../constants/images";

const Skills = () => {
  return (
    <StyledSkills>
      <h2>Skills</h2>
      <div className="container-flex filter-accent">
        <div className="container-skill">
          <h3>HTML5</h3>
          <img src={images.htmlIcon} alt="html 5" className="skill-img" />
        </div>

        <div className="container-skill">
          <h3>CSS</h3>
          <img src={images.cssIcon} alt="css" className="skill-img" />
        </div>

        <div className="container-skill">
          <h3>HTML5</h3>
          <img src={images.htmlIcon} alt="html 5" className="skill-img" />
        </div>

        <div className="container-skill">
          <h3>CSS</h3>
          <img src={images.cssIcon} alt="css" className="skill-img" />
        </div>
      </div>
    </StyledSkills>
  );
};

export default Skills;
