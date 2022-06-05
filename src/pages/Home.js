import React from "react";
import { StyledHome } from "../components/Home.Styled";
import TypeWriterEffect from "react-typewriter-effect";
import Typewriter from "../components/Typewriter";

const Home = () => {
  const stxStyle = (color) => {
    return {
      fontFamily: "IBM Plex Mono",
      display: "flex",
      color: color,
      // fontSize: "1.75rem",
    };
  };

  const stxColors = {
    purple: "#AD78DD",
    lightBlue: "#58AFEF",
    darkBlue: "#528BFF",
    yellow: "#E6B424",
    lightYellow: "#CEB06C",
  };
  return (
    <StyledHome>
      <div className="container-line">
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
            startDelay={1000}
            txt="Jake ="
          />
        </div>
        <div className="container-stx">
          <Typewriter txtColor={stxColors.yellow} startDelay={2400} txt="()" />
        </div>
        <div className="">
          <Typewriter txtColor={stxColors.purple} startDelay={3000} txt="=>" />
        </div>

        <div className="stx-indent">
          <Typewriter
            txtColor={stxColors.lightYellow}
            startDelay={3600}
            txt="{"
          />
        </div>

        {/* <TypeWriterEffect
          textStyle={{
            fontFamily: "Red Hat Display",
            color: "#3F3D56",
            fontWeight: 500,
            fontSize: "1.5em",
          }}
          startDelay={10000}
          cursorColor="#3F3D56"
          multiText={[
            "Front end developer",
            "it consist of two types...",
            "Single text display and multi text display",
            "Fonts can be customized.",
            "The type speed can be customized as well",
          ]}
          multiTextDelay={1000}
          typeSpeed={30}
        /> */}
      </div>
    </StyledHome>
  );
};

export default Home;
