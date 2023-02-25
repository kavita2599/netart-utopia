/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx, Styled, Flex } from "theme-ui";
import { FaAngleDown, FaAngleUp } from "react-icons/fa"

const FAQ = ({ heading, description, open, toggle, num }) => {
  var state = open

  return (
    <div sx={divStyle}>
      <Flex sx={{ ...flexStyle, color: `${state ? "primary" : "white"}` }} onClick={toggle}>
        {state ? <FaAngleUp sx={{ m: "0 8px 5px 8px" }} /> : <FaAngleDown sx={{ m: "0 8px 5px 8px" }} />}
        <Styled.p sx={{ p: "0 5px" }}>{"0" + num}.</Styled.p>
        <Styled.p>{heading}</Styled.p>
      </Flex>
      <Styled.p sx={{ ...descStyle, display: `${state ? "block" : "none"}`, }}>{description}</Styled.p>
    </div>
  );
};

export default FAQ;

const descStyle = {
  width: "100%", p: "15px 15px 15px 40px",
}

const divStyle = { bg: "templateGray", width: "90%", m: "3px auto", cursor: "pointer", color: "white",position:"relative",zIndex:"5" }

const flexStyle = { justifyContent: "start", alignItems: "center", p: "10px 0", color: "white" }




















