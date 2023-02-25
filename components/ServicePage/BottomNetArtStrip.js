/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx, Styled, Flex } from "theme-ui";

const ContentDiv={
  width:'80%',
  margin:'20px auto 0 auto', backgroundImage:"linear-gradient(180deg, #006BAD 0%, #00304D 100%)" , color:"white",
  flexDirection:'column',padding:'10px',alignItems:"center",
  textAlign:"center",
  borderRadius:"10px",position:"relative"
}

const BottomNetArtStrip = ({heading,desc}) => {
      return (
          <Flex sx={ContentDiv}>
            <img sx={{position:"absolute",top:"-45px",bg:"black", padding:"5px 10px",height:"50px"}} src="\images\Logo.png" alt="netart-logo"/>
             <Styled.h3 sx={{m:"20px 0 10px 0"}}>{heading}</Styled.h3>
             <Styled.p sx={{mb:"15px",width:"80%"}}>{desc}</Styled.p>
        </Flex>
      );
    };
    
    export default BottomNetArtStrip;
    
    
    