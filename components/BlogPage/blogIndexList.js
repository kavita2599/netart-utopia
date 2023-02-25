import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui";
import Link from "next/link";
import AnimatedContainer from "../Animation/AnimatedContainer"

const post_grid = {
  width: [null, "90%", "47%",],
  position: "relative",
  margin: [null,"10% auto","5% 0px"],
  height:[null,"340px", "320px"],
  textDecoration: "none",
  color: "black",
};

const post_grid_main = {
  width: "92%",
  margin: "0 auto 10px auto",
  backgroundColor: "templateGray",
  color:"white",
  position: "absolute",
  top: [null, "30%", null,null, "35%"],
  left: "5%",
  padding: "20px 0",
  height: [null,"max-content","240px"],
  borderRadius:"4px"
};
const post_grid_main_top = {
  width: "100%",
  borderLeft: "5px solid purple",
  flexDirection: "row",
  justifyContent: "space-between",
  flexWrap: "wrap",
  padding: "10px 5%",
};
const post_grid_main_cont_1 = {
  padding: "10px 5%",
  m:"0",
  ":hover": {
    color: "templatePrimary",
    transition: "color 0.5s ease",
  },
};
const hoverStyle = {
  padding: "0 5%",
  ":hover": {
    color: "templatePrimary",
    transition: "color 0.5s ease",
  },
  color: "white",
  textDecoration: "none",
};
const BlogPost = ({ heading, date, slug, image,width ,animation,delay}) => {
  return (
    <div sx={{ ...post_grid, cursor: "pointer",...width, }}>
   <AnimatedContainer animation={animation ? animation : null} delay={delay}>
        <div
          sx={{
            height: "80%",
            borderRadius:"4px",
            position:"relative",
            width: "100%",
            background: String(`url(${image}) no-repeat`),
            backgroundSize: "cover",
          }}
        ></div>
          <Link href={slug}>
          <a sx={{cursor:"pointer"}}>
           <div sx={post_grid_main}>
          <div sx={post_grid_main_top}>{date}</div>
          <Styled.h3 sx={post_grid_main_cont_1}>{heading}</Styled.h3>
          <Styled.p sx={{p:"0 5%",...hoverStyle}}>Read More</Styled.p> 
        </div>
        </a>
          </Link>
    </AnimatedContainer>
      </div>
  );
};
export default BlogPost;
