/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui";
import Link from "next/link";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const btnStyle = {
  fontWeight: "bold",
  borderRadius: "50px",
  backgroundColor: "netartBlue",
  width: "max-content",
  color: "white",
  cursor: "pointer",
  padding: "10px 20px"
};
const SectionStyle = {
  position: "relative",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  color: "white"
};
const TeamOverlayStyle = {
  position: "absolute",
  height: "100%",
  width: "100%",
  top: 0,
  backgroundColor: "rgba(0,0,0,.8)",
  zIndex:1
};
const ServiceBanner = (props) => {
  var Var = {
    Variant1: { flex: { flexDirection: [null, "column", "row"] } },
    Variant2: {
      flex: { flexDirection: [null, "column-reverse", "row-reverse"] },
    },
  };

  return (
    <section style={{...SectionStyle,backgroundImage:props.bgImg}}>
      {props.overlay ? <div sx={TeamOverlayStyle} />:null}
      <Flex sx={{ ...Var[props.variant].flex, alignItems: "center", justifyContent: "space-between", p: ["130px 20px 150px 20px", "130px 40px 150px 40px", "130px 100px 150px 100px"],zIndex:"5",position:"relative" }}>
        <Flex
          sx={{ width: [null, '100%', '53%',], flexDirection: "column", }} >
          {props.heading ? <Styled.h1 >{props.heading}</Styled.h1> : null}
          {props.heading2 ? <Styled.h2 >{props.heading2}</Styled.h2> : null}
          <Styled.p sx={{ width: [null, "100%", "80%", "80%"], mb: "40px" }}>{props.desc}</Styled.p>
          <Link href={props.link} >
            <a className='btns' sx={{ ...btnStyle }}>{props.btntext}</a>
          </Link>
        </Flex>
        <Flex sx={{ width: [null, '100%', '40%',] }}>
          <LazyLoadImage src={props.img} sx={{ width: "100%" }} />
        </Flex>
      </Flex>
    </section>
  );
};
export default ServiceBanner;
