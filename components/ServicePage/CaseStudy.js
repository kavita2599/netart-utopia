/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui";
import { RevealContent, RevealImg, } from "./reveal"

import Link from "next/link";

const CaseStudy = ({
  heading,
  desc,
  imgUrl,
  btnText,
  imgUrlSmall,
  Variant, RevealVariant
}) => {
  var Var = {
    Variant1: {
      flex: { flexDirection: "row" },
      smallImg: { left: "35%" },
      span1: { left: [null, "4%", "12%"] },
      span2: { left: "28%" },
      span3: { left: "40%" },
    },
    Variant2: {
      flex: { flexDirection: "row-reverse" },
      smallImg: { left: "-10%" },
      span1: { right: [null, "4%", "12%"] },
      span2: { right: "28%" },
      span3: { right: "40%" },
    },
  };

  return (
    <Flex sx={{ ...ParentFlex, ...Var[Variant].flex, color: "white" }}>
      {/* Two Img Container */}
      <RevealImg Variant="Variant2">
        <div sx={{ p: "2% 0", pr: "15px", ...ImgFlex }}>
          <img src={imgUrl} sx={{ width: "100%" }} alt="case-study-img" />
          <img
            src={imgUrlSmall}
            sx={{
              width: "50%",
              top: "50%",
              ...Var[Variant].smallImg,
              position: "absolute",
            }}
            alt="case-study-img"
          />
        </div>
      </RevealImg>
      {/* Small little img */}
      <div>
        <RevealImg Variant="Variant1">
          <span
            sx={{
              position: "absolute",
              top: [null, "48%", "3%"],
              ...Var[Variant].span1,
            }}
          >
            <img src="https://netart.io/wp-content/themes/maacuni/images/zigzak.png" alt="small-illustration" />
          </span>
        </RevealImg>
        <RevealImg Variant="Variant1">
          <span
            sx={{
              position: "absolute",
              top: [null, "30%", "5%"],
              ...Var[Variant].span2,
            }}
          >
            <img src="https://netart.io/wp-content/themes/maacuni/images/triangle.png" alt="small-illustration" />
          </span>
        </RevealImg>
        <RevealImg Variant="Variant1">
          <span sx={{ position: "absolute", top: "8%", ...Var[Variant].span3 }}>
            <img src="https://netart.io/wp-content/themes/maacuni/images/line.png" alt="small-illustration" />
          </span>
        </RevealImg>
      </div>
      {/* Content */}
      <Flex sx={ContentFlex}>
        <RevealContent Variant="Variant1">
          <Styled.h2 sx={{ fontWeight: "900", }}>{heading}</Styled.h2>
        </RevealContent>
        <RevealContent Variant="Variant2">
          <Flex sx={{ alignItems: "start" }}>
            <hr sx={HrStyle}></hr>
            <Styled.p sx={{ width: "60%" }}>{desc}</Styled.p>
          </Flex>
        </RevealContent>
        <Link href="#" >
          <RevealContent Variant="Variant3">
            <a className="btns" sx={BtnStyle}>Read Case Study</a>
          </RevealContent>
        </Link>
      </Flex>
    </Flex>
  );
};
export default CaseStudy;

const BtnStyle = {
  fontFamily: "body",
  textDecoration: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  position: "relative",
  m: "5% 0",
  overflow: "hidden",
  width: "max-content",
  p: "2.5% 4%",
  cursor: "pointer",
  textAlign: "center",
  height: "15%",
  backgroundImage: "linear-gradient(180deg, #006BAD 0%, #00304D 100%)",
  borderRadius: "25px",
  backgroundImage: "linear-gradient(180deg, #006BAD 0%, #00304D 100%)",
  ":hover": {
    backgroundImage: "linear-gradient(45deg, #006BAD 0%, #00304D 100%)",
  },
  padding: "10px 20px"
};

const HrStyle = {
  m: "8px 12px 8px 0",
  border: "none",
  width: "58px",
  height: "5px",
  backgroundImage: "linear-gradient(180deg, #D60E22 0%, #910C19 100%)",
};

const ContentFlex = {
  width: [null, "100%", "50%"],
  flexDirection: "column",
  pt: [null, "none", "5.5%"],
  justifyContent: [null, "space-evenly", "space-between"],
  height: [null, "80%", "60%"],
};

const ParentFlex = {
  bg: "bgPrimary",
  height: [null, "340px", "auto"],
  alignItems: [null, "center", "start"],
  position: "relative",
  p: [null, "0 30px", "7% 5%"],
};

const ImgFlex = {
  width: [null, "0", "50%"],
  display: [null, "none", "flex"],
  position: "relative",
};
