/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui";
import React, { useState, useEffect } from "react";
import Link from "next/link"
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { BiChevronUp } from "react-icons/bi";
import { SiWhatsapp } from "react-icons/si";
import { useRef } from "react";

const FooterStyle = {
  padding: "30px",
  position: "relative",
  overflow: "hidden !important",
  bg: "black",
  height: [null, "25vh", "20vh", "14vh"],
  width: "100%",
  left: 0,
  bottom: 0,
  zIndex: 50,
  justifyContent: "space-around",
  alignItems: "center",
  flexDirection: [null, "column", "column", "row", "row"],
};
const link = {
  textDecoration: "none !important",
  color: "white",
  display: [null, "none", "none", "none", "block"],
  fontSize: [null, 10, 12, null, null, 18],
};
const symbol = {
  display: [null, "block", "block", "block", "none"],
  color: "grey",
  fontSize: "22px",
};

const link_content = [
  {
    url: "https://www.facebook.com/netart.io",
    tittle: "FACEBOOK",
  },
  {
    url: "https://twitter.com/NetArt_India",
    tittle: "TWITTER",
  },
  {
    url: "https://www.linkedin.com/company/netart-india/",
    tittle: "LINKEDIN",
  },
  {
    url: "https://www.instagram.com/_netart_/?hl=en",
    tittle: "INSTAGRAM",
  },
];
const Footer = (props) => {
  const [showScroll, setShowScroll] = useState(false);
  const ref = useRef(null);


  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return function cleanup() {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  const Linkcontent=[
    {href:"/",name:"Home"},
    // {href:"/blogs",name:"Blogs"},
    { href: '/blog',name:"Blog" ,external:true},
    {href:"/contact",name:"Contact"},
  ]

  // m:'0 auto',width:[null,'100%','100%','85%']
  return (
    <>
      <Flex sx={{...FooterStyleParent}} ref={ref}>
        <Flex sx={parentContainer}>
          <Styled.h3 sx={FootTitle}>Main Menu</Styled.h3>
          <Flex
            sx={{
              ...container,
              flexDirection: "column",
              justifyContent: [null, "space-around", "normal"],
            }}
          >
            {Linkcontent.map((x,i)=><a sx={links} href={x.href} key={"FooterLink"+i}> <FaAngleDoubleRight sx={{ mr: "8px" }} />{x.name}</a>)}
          </Flex>
        </Flex>
        <Flex sx={parentContainer}>
          <Styled.h3 sx={FootTitle}>About Us</Styled.h3>
          <div sx={container}>
            <Styled.p>
              NetArt is one of the leading online design and development
              companies in India. We have some of the most creative and
              passionate software engineers, graphic designers, SEO experts, and
              content writers on our team.
            </Styled.p>
          </div>
        </Flex>
        <Flex sx={parentContainer}>
          <Styled.h3 sx={FootTitle}>Office Location</Styled.h3>
          <div sx={container}>
            <Styled.p>
              <img src="/images/logo.png" sx={{mb:"10px",height:'20px',width:"auto"}}/>
              <br />
              A.K Complex, 13/17, Tagore Rd, <br /> Ganapathy,
              <br />
              Coimbatore, Tamil Nadu, <br />
              India – 641006
              <br />
              Web: netart.io <br />
              Email: work@netart.io
            </Styled.p>
              <a href="/terms-condition" sx={{color:"white",textDecoration:"none !important"}}>Terms & Conditions</a>
              <br/>
              <a href="/privacy" sx={{color:"white",textDecoration:"none !important"}}>Privacy Policy</a>
          </div>
        </Flex>
        {/* <Flex sx={parentContainer}>
          <Styled.h3 sx={FootTitle}>Get Directions</Styled.h3>
          <div sx={container}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31328.75485884019!2d76.96349022032382!3d11.031547147508691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8591e6102768d%3A0xd889656951e16e9f!2sNETART%20%7C%20Web%20Design%20and%20Development%20%7C%20Digital%20Marketing%20Company%20in%20Coimbatore%20%7C%20SEO%20Services%20in%20Coimbatore%20%7C%20SEO%20Agency%20%7C%20Web%20Design%20and%20Development!5e0!3m2!1sen!2sin!4v1612183244831!5m2!1sen!2sin"
              sx={{  width: "100%",  height: "200",  frameborder: "0",  border: "0", }}
              allowFullScreen={true} aria-hidden="false" tabIndex="0" ></iframe>
          </div>
        </Flex> */}
      </Flex>

      <Flex sx={FooterStyle}>
        <Flex sx={{width:[null,"100%","100%","28%","32%"],textAlign:"center",justifyContent:"center"}}>
          <Styled.p sx={{ color: "white",  fontSize: [null, "11px", "12px", null, null, "18px"], }} >
            DESIGNED AND DEVELOPED BY &nbsp;
            <Link href="/">
            <a style={{textDecoration:"none"}}>
            <span  sx={{ color: "#CB0F22",  m: "0px 0 5px 0" }} >NET</span>
            <span  sx={{ color: "#006BAD",  m: "0px 0 5px 0" }}>ART</span>
            </a>
            </Link>
          </Styled.p>
        </Flex>
        <Flex sx={{ justifyContent: "space-around", alignItems: "center", width: "50%", }} >
          {link_content.map((x,index) => (
            <Styled.a sx={link} key={x.url+ index} href={x.url} target="_blank">
              {x.tittle}
            </Styled.a>
          ))}
          <FaFacebookF sx={symbol} />
          <FaTwitter sx={symbol} />
          <FaLinkedin sx={symbol} />
          <FaInstagram sx={symbol} />
        </Flex>
        <Flex sx={FlexSide}>
          <hr sx={HrStyle}></hr>
          <span sx={{ display: [null, "none", "none", "block", "block"], color: "white",  }} > 2021 </span>
        </Flex>
      </Flex>
       <a href="https://wa.link/2q70fa" className="whatsapp-btn" target="_blank" sx={{textDecoration:"none",...whatsappStyle}}>
         <SiWhatsapp className="whatsapp-btn"  sx={{fontSize:"28px",color:"white"}}/>
       </a>
       <Styled.p className="whatsapp-text" sx={{...whatsapptext}}>WhatsApp Us</Styled.p>
      <div onClick={scrollTop} id="toTop"
          sx={{ ...ScrollTopStyle, display: showScroll ? "flex" : "none" }}>
          <BiChevronUp sx={{ color: "black", fontSize: "28px" }} />
        </div>
    </>
  );
};
export default Footer;


const FooterStyleParent = {
  position: "relative",
  zIndex: "5",
  justifyContent: "space-around",
  p: [null, "40px 8px", "10px 15px", "0 22px"],
  height: [null, "900px", "600px", "450px"],
  alignItems: "center",
  flexDirection: [null, "column", "row", "row"],
  bg:"footerBlue",color:"white"
};

const ScrollTopStyle = {
  bg: "white",
  position: "fixed",
  zIndex:500,
  width: "35px",
  height: "35px",
  borderRadius: "50%",
  right: [null, "12px", "15px", "28px"],
  bottom: [null, "8%", "9%", "10%"],
  display: "flex",
  cursor: "pointer",
  justifyContent: "center",
  alignItems: "center",
  mixBlendMode: "difference",
};

const whatsappStyle={
  ...ScrollTopStyle, bg:'#25D366',bottom:"19%",color:"white",mixBlendMode:"none",borderRadius:"20%",
  height:"40px",width:"40px",
}

const whatsapptext={...whatsappStyle, display:"none",bottom:"19%",right: [null, "60px", "70px", "80px"],width:"auto",height:"auto",padding:"0px 18px",borderRadius:"15px"}


const HrStyle = {
  display: [null, "none", "none", "none", "block"],
  height: "0.5px",
  backgroundColor: "white",
  width: "70%",
  marginRight: "10px",
};

const FlexSide = {
  width: "10%",
  marginRight: "140px",
  display: [null, "none", "none", "none", "-webkit-inline-box;"],
};
const links = {
  textDecoration: "none !important",
  color: "white",
  display: "flex",
  alignItems: "center",
  mb: [null, "0px", "10px"],
  ":hover":{
    color:"templatePrimary"
  }
};
const parentContainer = {
  width: [null, "90%", "20%", "20%"],
  flexDirection: "column",
  height: [null,"max-content","100%"],
  justifyContent: "center",
  mb: "10px",
};
const container = {
  height: [null, "100%", "50%"],
};
const FootTitle = {
  height: [null, "auto", "80px", "40px"],
};
