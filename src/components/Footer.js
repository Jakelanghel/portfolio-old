import React from "react";
import { motion } from "framer-motion";

import { StyledFooter } from "./styled/Footer.Styled";
import images from "../constants/images";

const Footer = () => {
  return (
    <StyledFooter>
      <a href="#">
        <img
          src={images.gitHubIcon}
          alt="link to my github profile"
          className="filter-accent"
        />
      </a>

      <a href="#">
        <img
          src={images.feMentorIcon}
          alt="link to my front end mentor profile"
          className="filter-accent"
        />
      </a>

      <a href="#">
        <img
          src={images.linkedInIcon}
          alt="link to my linked in profile"
          className="filter-accent"
        />
      </a>
    </StyledFooter>
  );
};

export default Footer;
