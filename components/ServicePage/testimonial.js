/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui";

const Testimonial = ({ name, desc,imgUrl }) => {
  return (
    <div sx={{ width: "100%",bg:"white",height:[null,"210px","182px"]}}>
      <img src={imgUrl} alt="client-image" sx={{display:"block",m:"0 auto 20px auto",}}/>
      <Flex sx={TestimonialFlex}>
        <Flex sx={{ justifyContent: "center", flexWrap: "wrap" }}>
          <Styled.h3>{name},</Styled.h3>
        </Flex>
        <div>
          <Styled.p>{desc}</Styled.p>
        </div>
      </Flex>
    </div>
  );
};
export default Testimonial;

const QuoteDiv = {
  position: "relative",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  m: "15px 0",
  backgroundImage: "linear-gradient(180deg, #D60E22 0%, #910C19 100%)",
};

const TestimonialFlex = {
  maxWidth: "750px",
  m: "0 auto",
  p: "0 30px",
  textAlign: "center",
  flexDirection: "column",
};
