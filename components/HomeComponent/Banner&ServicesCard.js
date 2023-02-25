/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import React, { useState, useEffect } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import AnimationContainer from '../Animation/AnimatedContainer'
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Card = ({ image, heading, description,Variant,List,animation,delay }) => {
 var Var={
    Variant1:{ div: { textAlign:"start",...HeroStyle },},
    Variant2:{ div: { textAlign:"center",...ServiceCardStyle ,},margin:{m:"auto"},borderRight:{borderRight:"none"}},
}

    return (
        <Col md={4} sx={{ ...ServiceColStyle,...(Var[Variant].borderRight) }}>
        <AnimationContainer animation={animation ? animation : null} delay={delay}>
            <div sx={{ ...(Var[Variant].div) }}>
                    {/* Img Title and Description of cards */}
                    <div sx={{ mb: "20px" }}>
                    <LazyLoadImage src={image} sx={{ maxHeight: "70px" }}/>
                    </div>
                    {Variant == "Variant1"?
                    <Styled.h2 sx={HeadingStyle}>{heading}</Styled.h2>:
                    <Styled.h3 sx={HeadingStyle}>{heading}</Styled.h3>
                    }
                    <div sx={{...ServiceSeparatorStyle,...(Var[Variant].margin)}} />
                  {description ?  <Styled.p sx={ServiceTextStyle}>
                        {description}
                    </Styled.p> : null}
                    {/* List elements for services */}
                    {List ? 
                    <div sx={ulistStyle}>
                        <Styled.p className="service-card-list" sx={listStyle}>{List}</Styled.p>
                    </div>
                   :null}
                </div>
                </AnimationContainer>
        </Col>
    )
}

export default Card

const ulistStyle={
    padding: 0,
    margin: "11px 0 0 0",
}

const ServiceColStyle = {
    padding: 0,
    position:"relative",
    color:"white",
    zIndex:5,
    borderRight: [null, "none", "1px solid #444"],
}


const HeroStyle = {
    height: "100%",
    bg: "#111",
    transition: ".2s",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    ":hover": {
        bg: "#222"
    },
    padding: "40px",
    color: "#fff"
}

const ServiceCardStyle={
    marginBottom: "20px",
    padding: "40px",
    height:[null,"420px","510px","420px","370px"],
    color: "#fff",
    textAlign: "center",
    borderRadius: "20px",
    transition: ".2s",
    ":hover": {
        backgroundColor: "#000",
        boxShadow:" 0 28px 60px  rgba(0, 214, 225, .1)",
        transform: "translateY(-10px)",
    }
}


const HeadingStyle = {
    fontWeight: "400",
    fontSize:"25px !important"
}

const ServiceSeparatorStyle = {
    height: "5px",
    width: "50px",
    bg: "templatePrimary",
    mb: "10px"
}


const ServiceTextStyle = {
    fontWeight: "300",
    color: "#c5c5c5"
}

const listStyle={
    listStyle: "none",
    color: "#c5c5c5",
    fontWeight: "300",
    margin: "5px 0px",
}