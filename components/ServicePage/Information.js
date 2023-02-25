/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui";

const Hrstyle = {
  //backgroundColor: 'white',
  width: "58px",
  height: "5px",
  position: "relative",
  ml: "0",
  mr: "6px",
  backgroundImage: "linear-gradient(180deg, #D60E22 0%, #910C19 100%)",
  border: "none",
};

const Information = ({ sub, heading, desc }) => {
  return (
    <div sx={{ width: "100%", p: "10% 5%", bg: "bgSecondary", color: "white" }}>
      <Flex sx={{ alignItems: "center" }}>
        <hr sx={Hrstyle}></hr>
        <span>{sub}</span>
      </Flex>
      <Flex
        sx={{
          width: "100%",
          flexDirection: [null, "column", "row"],
          justifyContent: "space-between",
        }}
      >
        <Styled.h2 sx={{ width: [null, "100%", "45%"] }}>{heading}</Styled.h2>
        <Styled.p sx={{ width: [null, "100%", "45%"] }}> {desc} </Styled.p>
      </Flex>
    </div>
  );
};

export default Information;
