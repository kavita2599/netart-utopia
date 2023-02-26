/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import React from "react";
import { Grid, Container } from '@mui/material'
import RevealContent from "../Animation/revealContent";
import AnimatedHeading from "../Animation/AnimatedHeading";

const Testimonial = ({ children }) => {
  const Section = {
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#000",
    backgroundSize: "cover",
  };

  const TestimonialContainer = {
    padding: ["50px 10px", "50px 10px", "50px 10px", "100px 0"],
  };
  return (
    <section sx={Section} id="testimonials">
      <div sx={TestimonialContainer}>
        <Container>
          <Grid container>
            <Grid item md={12} sx={{ marginBottom: "30px" }}>
              <AnimatedHeading text="Recent testimonials" />
            </Grid>
            <Grid item md={12}>
              <RevealContent>{children}</RevealContent>
            </Grid>
          </Grid>
        </Container>
      </div>
    </section>
  );
};

export default Testimonial;
