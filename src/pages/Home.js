import React from "react";
import Typewriter from "../components/Typewriter";

import { StyledHome } from "../components/styled/styled_pages/Home.Styled";
import { StyledCodeContainer } from "../components/styled/Containers/CodeContainer.Styled";
import { StyledCodeLine } from "../components/styled/Containers/CodeLineContainer.Styled";
import { StyledSkills } from "../components/styled/Skills.Styled";

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
      <StyledCodeContainer>
        <StyledCodeLine>
          <div className="container-stx">
            <Typewriter
              txtColor={stxColors.purple}
              startDelay={100}
              txt="const"
            />
          </div>
          <div className="container-stx">
            <Typewriter
              txtColor={stxColors.lightBlue}
              startDelay={800}
              txt="Jake ="
            />
          </div>
          <div className="container-stx">
            <Typewriter
              txtColor={stxColors.yellow}
              startDelay={1500}
              txt="()"
            />
          </div>
          <div className="container-stx">
            <Typewriter
              txtColor={stxColors.purple}
              startDelay={1800}
              txt="=>"
            />
          </div>

          <div className="container-stx stx-indent-1">
            <Typewriter txtColor={stxColors.gold} startDelay={2100} txt="{" />
          </div>
        </StyledCodeLine>

        <StyledCodeLine className="line-indent-1">
          <div>
            <Typewriter
              txtColor={stxColors.purple}
              startDelay={2300}
              txt="return"
            />
          </div>

          <div className="container-stx">
            <Typewriter txtColor={stxColors.yellow} startDelay={3000} txt="(" />
          </div>
        </StyledCodeLine>

        <StyledCodeLine className="line-indent-2 multi-line">
          <Typewriter
            multi={true}
            txtColor={stxColors.softYellow}
            startDelay={4000}
          />
        </StyledCodeLine>

        <StyledCodeLine className="line-indent-1">
          <Typewriter txtColor={stxColors.yellow} startDelay={3200} txt=");" />
        </StyledCodeLine>

        <StyledCodeLine>
          <Typewriter txtColor={stxColors.gold} startDelay={3400} txt="};" />
        </StyledCodeLine>

        <button>My Work</button>
      </StyledCodeContainer>

      <StyledSkills>skills</StyledSkills>
    </StyledHome>
  );
};

export default Home;
