/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import React, { useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const TestimonialsOnePart = ({text,img,profession,name,}) => {

  const TestimonialBox = {
    padding: ["20px", "20px", "20px", "50px"],
    backgroundColor: "#111",
    color:"white",
    minHeight: ["700px", "700px", "700px", "400px"],
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
  };

  const Quotation={
    position: "absolute",
    height: "100px",
    width: "100px",
    objectFit: "contain",
    opacity: "0.7 !important",
  }

  const QuotationUp = {
  ...Quotation,
    top: "5px",
    left: "10px",
  };

  const QuotationDown = {
    ...Quotation,
    bottom: "5px",
    right: "10px",
  };

  const SelectorContainer = {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    top: "50px",
    marginBottom:"20px"
  };

  const TestimonialText = {
    color: "white",
    //fontSize: ["20px", "20px", "25px"],
    fontWeight: "400",
    lineHeight: ["25px", "25px", "35px"],
    textAlign: "center",
  };

  const TestimonialClient = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "35px",
  };

  const TestimonialClientInfo = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
  };

  const TestimonialClientName = {
    marginBottom: "0",
    fontWeight: "600",
    color:"templatePrimary"
    //fontSize: "20px",
  };

  const TestimonialClientProfession = {
    marginBottom: "0",
  };

  return (
    <div sx={TestimonialBox}>
       <LazyLoadImage  src="/images/upq.png"  sx={QuotationUp} />
        <div
          className={"TestimonialItem TestimonialItem_active" }
          sx={{  width:"80%",m:"0 auto",}}
        >
          <Styled.p sx={TestimonialText}>{text}</Styled.p>
          <div sx={TestimonialClient}>
            <div sx={TestimonialClientInfo}>
              <Styled.h3 sx={TestimonialClientName}>{name}</Styled.h3>
              <Styled.p sx={TestimonialClientProfession}>{profession}</Styled.p>
              {/* <img src={img} alt="testimonial-logo" sx={{height:"auto",width:"100%",p:"15px 10px",mt:"20px"}}/> */}
            </div>
          </div>
        </div>
        <LazyLoadImage src="/images/downq.png" sx={QuotationDown} />
       <div sx={SelectorContainer}>
       <LazyLoadImage src={img} sx={{objectFit:'scale-down',height:"100px",width:"auto"}} />
      </div>

    </div>
  );
};

export default TestimonialsOnePart;
