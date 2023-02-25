/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui";
import AnimationContainer from "../Animation/AnimatedContainer";
import AnimatedContainer from "../Animation/AnimatedContainer"

const Hrstyle = {
  width: "58px",
  height: "5px",
  position: "relative",
  m: "0",
  mr: "6px",
  backgroundImage: "linear-gradient(to right, #D60E22 , #900C19)",
  border: "none",
};

const Info = ({ paratitle, heading, desc, subtitle, imgurl, variant,bg ,animation}) => {
  var Var = {
    Variant1: { flex: { flexDirection: [null, "column", "row"] } },
    Variant2: {
      flex: { flexDirection: [null, "column-reverse", "row-reverse"] },
    },
  };
  return (
    <AnimationContainer animation={animation ? animation : null} delay={1000}>
    <div sx={{ width: "100%", p: "5%",color:"white",...bg }}>
      <Flex
        sx={{
          width: "100%",
          ...Var[variant].flex,
          justifyContent: "space-between",
        }}>
        <Flex
          sx={{
            height: "auto",
            // m: "auto 0",
            width: [null, "100%", "46%"],
            flexDirection: "column",
          }}
        >
         {subtitle ?  <Flex sx={{ alignItems: "center",mb:"10px"}}>
            <hr sx={Hrstyle}></hr>
            <Styled.h3 sx={{m:"0"}}>{subtitle}</Styled.h3>
          </Flex> : null}
          <Styled.h2>{heading}</Styled.h2>
         {paratitle ? <Styled.p sx={{ color: "#F15F46", my: "20px", fontSize: "18px" }}>
            {paratitle}
          </Styled.p> : null}
          <Styled.p sx={{ height: "30%" }}> {desc} </Styled.p>
        </Flex>
        {/* <picture sx={{ width: [null, "100%", "45%"] }}>
          <source
            srcset={imgurl.srcSet}
            sizes="90vw"
            media="(min-width: 300px)"
          /> */}
          <img
            //sx={{ width: "100%", height: "auto" }}
            sx={{ width: [null, "100%", "45%"],height:"100%",objectFit:"cover" }}
            src={imgurl}
            alt="illustration"
          />
        {/* </picture> */}
      </Flex>
    </div>
    </AnimationContainer>
  );
};

export default Info;
