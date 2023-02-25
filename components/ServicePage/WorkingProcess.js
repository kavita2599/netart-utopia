/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Flex,Styled } from "theme-ui";

const wp_grid = {
  width: ["100%", "100%", "50%", "25%", "25%"],
  height: "350px",
  bg: "bgSecondary",
  flexDirection: "column",
  border: "1px solid #fff",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  color: "light",
  position:"relative",
  zIndex:5
};

const wp_grid_element_1 = {
  fontSize: "55px",
  margin: "0 auto",
  fontWeight: "700",
};
const wp_grid_element_2 = {
  fontSize: "26px",
  margin: "15px auto",
  fontWeight: "700",
};
const wp_grid_element_3 = {
  width: "90%",
  margin: "0 auto",
  textOverflow: "hidden",
  fontWeight: "400",
  textAlign: "center",
};
const WorkingProcess = ({ number, heading, description }) => (
  <Flex sx={wp_grid}>
    <p sx={wp_grid_element_1}>{number}</p>
    <Styled.h3 sx={wp_grid_element_2}>{heading}</Styled.h3>
    <Styled.p sx={wp_grid_element_3}>{description}</Styled.p>
  </Flex>
);

export default WorkingProcess;
