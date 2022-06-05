import TypeWriterEffect from "react-typewriter-effect";

import React from "react";

const Typewriter = (props) => {
  return (
    <TypeWriterEffect
      textStyle={{
        fontFamily: "IBM Plex Mono",
        display: "flex",
        color: props.txtColor,
        fontSize: "1.5rem",
      }}
      startDelay={props.startDelay}
      cursorColor="transparent"
      text={props.txt}
      typeSpeed={200}
      hideCursorAfterText={true}
      // scrollArea={myAppRef}
    />
  );
};

export default Typewriter;
