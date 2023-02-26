/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import React, { useState, useEffect, Fragment } from "react";
import { Grid, Container } from '@mui/material'
import Typewriter from "typewriter-effect";

const Hero = (props) => {
  const [divheight, setDivheight] = useState(0);
  const [divwidth, setDivwidth] = useState(0);

  const updateDimensions = () => {
    if (divheight !== window.innerHeight) {
      setDivheight({ divheight: window.innerHeight });
    }
    if (divwidth !== window.innerWidth) {
      setDivwidth({ divwidth: window.innerWidth });
    }
  };
  useEffect(() => {
    console.log("heightofwidnowfuntion", updateDimensions);
    window.addEventListener("resize", updateDimensions);
    return () => {
      console.log("cleaned up");
      window.removeEventListener("resize", updateDimensions);
    };
  });
  return (
    <section id="home" sx={SectionStyle}>
      <div
        sx={{
          height: [null, "350px", "720px", "700px", "700px", "780px"],
          ...OverlayStyle,
        }}
      >
        <Container>
          <div sx={ContentStyle}>
            <Styled.h1 sx={{color: "white",}}><Fragment>{props.heading1}<br /><span sx={{color: "templatePrimary",}}>{props.heading2}</span></Fragment></Styled.h1>
            <div sx={SeparatorStyle} />
            {props.HomeBanner ? <div sx={TypeStyle}>
              <Typewriter
                options={{
                  strings: ["App Developers", "Web Designers", "UX Designers"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div> : null}
          </div>
        </Container>
      </div>
      {props.HomeBanner ? <div sx={BottomContentStyle}>
        <Container>
          <Grid container>{props.children}</Grid >
        </Container>
      </div> : null}
    </section>
  );
};

export default Hero;
