/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Styled } from "theme-ui";
import AnimatedHeading from "../Animation/AnimatedHeading"

const Wraper = ({ children, sub, heading, Variant, bg, belowsub, padding }) => {
  var Var = {
    Variant1: {
      div: { textAlign: "center" },
      flex: { justifyContent: "center" },
    },
    Variant2: { flexMr: { mr: "30px" }, div: { textAlign: "start" } },
  };
  return (
    <div sx={{ ...DivStyle, ...bg }}>
      {heading ? <Flex sx={{ ...FlexParentStyle, ...Var[Variant].flexMr, ...padding }}>
        {sub ? <Styled.p>{sub}</Styled.p> : null}
        <AnimatedHeading text={heading} />
        {/* <Styled.h2>{heading}</Styled.h2> */}
        {belowsub ? <Styled.p>{belowsub}</Styled.p> : null}
      </Flex> : null}
      <div sx={{ ...Var[Variant].div }}>{children}</div>
    </div>
  );
};
export default Wraper;

const HrStyle = {
  backgroundImage: "linear-gradient(180deg, #D60E22 0%, #910C19 100%)",
  width: "58px",
  height: "5px",
  position: "relative",
  ml: "0",
  mr: "6px",
  border: "none",
};

const DivStyle = {
  position: "relative",
  p: "50px 0",
};

const FlexParentStyle = {
  height: "auto",
  p: "0 5% 2.5% 5%",
  flexDirection: "column",
  alignItems: "center",
};
