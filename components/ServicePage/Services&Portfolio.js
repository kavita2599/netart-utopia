/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Flex } from "theme-ui";
import { GrLineChart } from "react-icons/gr";

const ImgFlex_Grid = {
  width: [null, "100%", "50%", "28%", "28%"],
  height: "auto",
  m: "10px auto",
  alignItems: "baseline",
};
const ImgFlex_icon = {
  width: "38%",
  color: "#fff",
};

const ThreeImageFlex = ({ heading, content }) => (
  <Flex sx={ImgFlex_Grid}>
    <GrLineChart sx={ImgFlex_icon} />
    <Flex sx={{ flexDirection: "column" }}>
      <Styled.h3>{heading}</Styled.h3>
      <Styled.p sx={{ width: "90%" }}>{content}</Styled.p>
    </Flex>
  </Flex>
);

export default ThreeImageFlex;
