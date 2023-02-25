/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui";
import Link from "next/link";

const btnStyle = {
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  fontSize: [null, "14px", null, null, null, "18px"],
  fontWeight: "510",
  fontFamily: "body",
  borderRadius: "50px",
  position:"relative",
  overflow:"hidden",
  backgroundColor: "blue",
  color: "white",
  width: "max-content",
  outline:"none",
  textDecoration: "none",
  cursor:"pointer",
  backgroundImage: "linear-gradient(180deg, #006BAD 0%, #00304D 100%)",
  ":hover":{
    backgroundImage: "linear-gradient(45deg, #006BAD 0%, #00304D 100%)",
  },
  padding:"10px 20px"
};

const Banner = ({ heading, imgurl, desc, btntext, link,heading2,padding,height }) => {
  
  return (
    <Flex
      sx={{
        height: "110vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage:`url(${imgurl})`,
        position: "relative",color:"white",...height
      }}
    >
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
          width: [null,'100%','75%','75%',"70%"],
          p: "130px 5% 150px 5%",
        }}
      >
         {heading ? <Styled.h1 sx={{mb: "40px" }}>{heading}</Styled.h1> : null}
         {heading2 ? <Styled.h2 s={{width: [null, "100%", "90%", "65%"] }}>{heading2}</Styled.h2> : null}
          <Styled.p sx={{width: [null, "100%", "80%", "80%"], mb: "40px" }}>{desc}</Styled.p>
         <Link href={link} >
            <a className='btns' sx={{...btnStyle,...padding}}>{btntext}</a>
          </Link> 
      </Flex>
    </Flex>
  );
};
export default Banner;
