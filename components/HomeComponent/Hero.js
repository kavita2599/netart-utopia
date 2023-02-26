/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import React, { useState, useEffect, Fragment } from "react";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typewriter from "typewriter-effect";

const Hero = (props) => {
  
const SectionStyle = {
  position: "relative",
  backgroundImage: "url(/images/bg1.jpg)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const OverlayStyle = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  backgroundColor: "rgba(0,0,0,.5)",
};

const TypeStyle = {
  lineHeight: [null, "20px", "20px", null, null, "50px"],
  fontFamily: "Poppins, sans-serif",
  ml: [null, "2px", "6px"],
  color: "white",
  textTransform: "uppercase",
};

const ContentStyle = {
  position: "relative",
  zIndex: "10",
  bottom: [null, null, null, null, "50px", 0],
};

const SeparatorStyle = {
  height: "5px",
  width: "50px",
  bg: "#00D6FF",
  mb: "30px",
  ml: [null, "2px", "6px"],
};

const BottomContentStyle = {
  position: [null, "relative", "relative", "absolute"],
  width: "100%",
  bottom: "-14%",
  zIndex: "2",
  bottom: [null, 0, 0, "-20%", "-20%", "-17%"],
};

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
            <Styled.h1 sx={{color: "white",}}><>{props.heading1}<br /><span sx={{color: "templatePrimary",}}>{props.heading2}</span></></Styled.h1>
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
          <Grid container>{props.children}</Grid>
        </Container>
      </div> : null}
    </section>
  );
};

export default Hero;
