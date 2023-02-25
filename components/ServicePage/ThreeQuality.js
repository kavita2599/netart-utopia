/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Flex } from "theme-ui";

const wp_grid = {
  width: [null, "100%", "100%", "33.3%"],
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  alignContent: "center",
  mt: "5%",
};

const HeadingStyle = {
  fontSize: "26px",
  margin: "15px auto",
  fontWeight: "700",
};
const ParaStyle = {
  width: "90%",
  margin: "0 auto",
  textOverflow: "hidden",
  fontWeight: "400",
  textAlign: "center",
};

const DescStyle = {
  padding: [null, "12px 8px", "16px 16px 50px 16px"],
  height: "60%",
  borderRight: [null, null, null, "1px solid"],
};

const ImgStyle = {
  width: "auto",
  height: "auto",
  display: "block",
  textAlign: "center",
};

const WorkingProcess = ({ imgurl, heading, desc, border }) => (
  <Flex sx={wp_grid}>
    <Flex sx={{ flexDirection: "column", alignItems: "center", height: "40%" }}>
      <img src={imgurl.sourceUrl} sx={ImgStyle} alt="icon" />
      <Styled.h3 sx={HeadingStyle}>{heading}</Styled.h3>
    </Flex>
    <div sx={{ ...DescStyle, ...border }}>
      <Styled.p sx={ParaStyle}>{desc}</Styled.p>
    </div>
  </Flex>
);

export default WorkingProcess;
