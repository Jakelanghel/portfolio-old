import React from "react";
import Typewriter from "../components/Typewriter";
import { motion } from "framer-motion";

import { StyledHome } from "../components/styled/styled_pages/Home.Styled";
import { StyledCodeContainer } from "../components/styled/Containers/CodeContainer.Styled";
import { StyledCodeLine } from "../components/styled/Containers/CodeLineContainer.Styled";
import About from "../components/About";

const Home = () => {
  const stxColors = {
    purple: "#AD78DD",
    lightBlue: "#58AFEF",
    darkBlue: "#528BFF",
    yellow: "#E6B424",
    softYellow: "#E5C07B",
    gold: "#CEB06C",
    orange: "#D38843",
    green: "#14A76C",
  };

  return (
    <StyledHome>
      <div className="container-hero">
        <StyledCodeContainer>
          <StyledCodeLine>
            <div className="container-stx">
              <Typewriter txtColor={stxColors.purple} txt="const" />
            </div>
            <div className="container-stx">
              <Typewriter
                txtColor={stxColors.lightBlue}
                startDelay={300}
                txt="Jake ="
              />
            </div>
            <div className="container-stx">
              <Typewriter
                txtColor={stxColors.yellow}
                startDelay={650}
                txt="()"
              />
            </div>
            <div className="container-stx">
              <Typewriter
                txtColor={stxColors.purple}
                startDelay={800}
                txt="=>"
              />
            </div>

            <div className="container-stx">
              <Typewriter txtColor={stxColors.gold} startDelay={950} txt="{" />
            </div>
          </StyledCodeLine>

          <StyledCodeLine className="line-indent-1">
            <div>
              <Typewriter
                txtColor={stxColors.purple}
                startDelay={1050}
                txt="return"
              />
            </div>

            <div className="container-stx">
              <Typewriter
                txtColor={stxColors.yellow}
                startDelay={1400}
                txt="("
              />
            </div>
          </StyledCodeLine>

          <StyledCodeLine className="line-indent-2 multi-line">
            <Typewriter
              multi={true}
              txtColor={stxColors.softYellow}
              startDelay={2000}
            />
          </StyledCodeLine>

          <StyledCodeLine className="line-indent-1">
            <Typewriter
              txtColor={stxColors.yellow}
              startDelay={1500}
              txt=");"
            />
          </StyledCodeLine>

          <StyledCodeLine>
            <Typewriter txtColor={stxColors.gold} startDelay={1650} txt="};" />
          </StyledCodeLine>
        </StyledCodeContainer>

        <motion.button initial={{ y: -200 }} animate={{ y: 0 }}>
          My Work
        </motion.button>
      </div>

      <About />
    </StyledHome>
  );
};

export default Home;
