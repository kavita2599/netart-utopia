import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui";

const Recg_grid = {
  width: [null, "95%", "95%", "50%"],
  flexDirection: ["column", "column", "row", "row", "row"],
  justifyContent: "space-around",
  mb: "15px",
};

const Recg_main = {
  width: ["70%", "100%", "50%", "70%", "70%"],
  // height: ['auto', 'auto', '50%', '50%', '50%'],
  textAlign: [null, "center", "start"],
};
const Recg_img_container = {
  width: [null, "100%", "30%"],
  // height: '50%',
  margin: [null, "auto", 0],
};
const Recg_img = {
  width: [null, "auto", "auto", "85%"],
  height: [null, "150px", "140px", "100%"],
  display: "block",
  margin: "auto",
  padding: "5px",
};

const Recognition = ({ image, heading }) => {
  return (
    <Flex sx={Recg_grid}>
      {/* {console.log(image)} */}
      <div sx={Recg_img_container}>
        <img src={require("./../images/cluth.png")} sx={Recg_img} />
      </div>
      <div sx={Recg_main}>
        <Styled.h4>{heading}</Styled.h4>
        <Styled.p sx={{ lineHeight: "1.4" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua, Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua
        </Styled.p>
      </div>
    </Flex>
  );
};
export default Recognition;
