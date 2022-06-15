import React from "react";
import { StyledAbout } from "./styled/About.Styled";

const About = () => {
  return (
    <StyledAbout>
      <h2>&#60;about/&#62;</h2>
      <p className="stx stx-open">
        <span>&#60;</span>p<span>&#62;</span>
      </p>
      <p className="about-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eos
        molestiae dolorum eveniet nobis fuga at, blanditiis in, quos quaerat
        consequuntur odit .
      </p>
      <p className="stx stx-close">
        <span>&#60;</span>/p<span>&#62;</span>
      </p>
    </StyledAbout>
  );
};
