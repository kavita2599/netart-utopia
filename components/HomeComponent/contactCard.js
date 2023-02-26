/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui";
import React from 'react'
import { Grid, Container } from '@mui/material'
import AnimationContainer from "../Animation/AnimatedContainer"
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ContactCard= ({imgurl,title,link,delays})=>{


  const IconCol = {
    mb:[null,"140px",null,null,null]
}  

const InfoPart = {
    minHeight: [null,"315px",null,"270px"],
    backgroundColor: "#111",
    border: "2px solid #444",
    
}

const Icon = {
    height: "70px",
    width: "70px",
    objectFit: "contain",
}

const IconContainer = {
    width: "150px",
    height: "150px",
    margin: "auto",
    padding: "35px",
    textAlign: "center",
    position: "relative",
    bottom: "75px",
    backgroundColor: "templatePrimary",
    borderRadius: "150px",
    transition: ".5s",
    ":hover" :  {
        backgroundColor: "#009e9e",
       }
}


const Info = {
    position: "relative",
    bottom: "30px",
}


const InfoLinkContainer = {
    textAlign: "center",
}


const InfoLink = {
    color: "templatePrimary",
    fontFamily:"Poppins, sans-serif",
    transition: ".5s",
    ":hover": {
      color: "#fff",
      textDecoration: "none",
    }
}
const InfoTitle = {
    //fontSize: "35px",
    color: "#fff",
    fontFamily: "century gothic",
    textAlign: "center",
}
       return(
        <Grid item sx={IconCol} md={4}>
         <AnimationContainer animation="fadeIn" delay={delays}> 
          < div sx={InfoPart}>
            <div sx={IconContainer}>
            <LazyLoadImage src={imgurl} sx={Icon} />
            </div>
            < div sx={Info}>
              <Styled.h3 sx={InfoTitle}>
               {title}
              </Styled.h3>
              < div sx={InfoLinkContainer}>
                <div sx={InfoLink}>
                  {link}
                </div>
              </div>
            </div>
          </div>
         </AnimationContainer> 
        </Grid>
       )


} 

export default ContactCard
