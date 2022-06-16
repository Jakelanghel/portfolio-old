import React from "react";
import { StyledAbout } from "../components/styled/About.Styled";
import Skills from "../components/Skills";
import { motion } from "framer-motion";
import ArrowIcon from "../components/Motion.Arrow_SVG";

const About = () => {
  return (
    <StyledAbout>
      <div className="container-about-copy">
        <motion.h2
          initial={{ y: -2000 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
          animate={{ y: 0 }}
        >
          Hi I'm Jake!
        </motion.h2>
        <motion.p
          initial={{ x: -2000 }}
          transition={{ ease: "easeIn", duration: 0.75 }}
          animate={{ x: 0, delay: 1 }}
          className="about-body"
        >
          I'm a Front-End Developer who's passionate about building beautiful,
          engaging, responsive websites.
        </motion.p>

        <motion.p
          initial={{ x: -2000 }}
          transition={{ ease: "easeIn", duration: 1 }}
          animate={{ x: 0 }}
          className="about-body"
        >
          I love building things for the web! Whether it be using the latest
          frameworks and libraries or starting from scratch with vanilla JS and
          custom CSS properties.
        </motion.p>

        <motion.p
          initial={{ x: -2000 }}
          transition={{ ease: "easeIn", duration: 1.25 }}
          animate={{ x: 0 }}
          className="about-body"
        >
          Highly motivated, quick learner with eagerness to learn the whole
          front end spectrum.
        </motion.p>
        <ArrowIcon className="arrow-icon" />
      </div>

      <motion.div>
        <Skills />
      </motion.div>
    </StyledAbout>
  );
};

export default About;
