import React from "react";
import Typewriter from "../components/Typewriter";
import { motion } from "framer-motion";

import { StyledHome } from "../components/styled/styled_pages/Home.Styled";
import { StyledCodeContainer } from "../components/styled/Containers/CodeContainer.Styled";
import { StyledCodeLine } from "../components/styled/Containers/CodeLineContainer.Styled";

const Home = () => {
  return (
    <StyledHome>
      <div className="container-hero">
        <StyledCodeContainer>
          <StyledCodeLine>
            <div className="container-stx">
              <Typewriter txtColor="var(--stx-purple)" txt="const" />
            </div>
            <div className="container-stx">
              <Typewriter
                txtColor="var(--stx-lightBlue)"
                startDelay={300}
                txt="Jake ="
              />
            </div>
            <div className="container-stx">
              <Typewriter
                txtColor="var(--stx-yellow)"
                startDelay={650}
                txt="()"
              />
            </div>
            <div className="container-stx">
              <Typewriter
                txtColor="var(--stx-purple)"
                startDelay={800}
                txt="=>"
              />
            </div>

            <div className="container-stx">
              <Typewriter txtColor="var(--stx-gold)" startDelay={950} txt="{" />
            </div>
          </StyledCodeLine>

          <StyledCodeLine className="line-indent-1">
            <div>
              <Typewriter
                txtColor="var(--stx-purple)"
                startDelay={1050}
                txt="return"
              />
            </div>

            <div className="container-stx">
              <Typewriter
                txtColor="var(--stx-yellow)"
                startDelay={1400}
                txt="("
              />
            </div>
          </StyledCodeLine>

          <StyledCodeLine className="line-indent-2 multi-line">
            <Typewriter
              multi={true}
              txtColor="var(--stx-softYellow)"
              startDelay={2000}
            />
          </StyledCodeLine>

          <StyledCodeLine className="line-indent-1">
            <Typewriter
              txtColor="var(--stx-yellow)"
              startDelay={1500}
              txt=");"
            />
          </StyledCodeLine>

          <StyledCodeLine>
            <Typewriter txtColor="var(--stx-gold)" startDelay={1650} txt="};" />
          </StyledCodeLine>
        </StyledCodeContainer>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 7, duration: 1 }}
        >
          My Work
        </motion.button>
      </div>
    </StyledHome>
  );
};

export default Home;
