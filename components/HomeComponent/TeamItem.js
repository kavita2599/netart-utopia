/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import React, { useState, useRef } from 'react'
import { FaLinkedin } from 'react-icons/fa'
import Tilt from 'react-tilt'
import RevealContent from "../Animation/revealContent"
import DesktopContent from "./DesktopContent"
import { LazyLoadImage } from 'react-lazy-load-image-component';

const InfoStyle = {
    transform: "translateY(50px)",
    transition: ".5s",
    width: "100%",
    textAlign: "center",
}
const NameStyle = {
    color: "white",
    fontWeight: "600",
    fontSize: "22px !important"
}

const ProffesionStyle = {
    color: "white",
    //fontSize: "14px",
    fontWeight: "400",
    textTransform: "uppercase"
}


const MobileContentStyle = {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 0,
    backgroundImage: " linear-gradient(to top, rgba(4,229,229,1), rgba(255, 255, 255, 0))",
    opacity: " 0 !important",
    transition: ".5s",
    display: [null, "flex", null, null, "none"],
    alignItems: "flex-end",
    visibility: "visible",

}

const ItemStyle = {
    position: "relative",
    margin: "25px auto 40px auto",
    overflow: "hidden",
    // maxWidth: "85%",
    width: "90%",
    borderRadius: "10px",
    minHeight: [null, "300px", null, null, null, "max-content"],
    maxHeight: [null, "300px", null, null, null, "max-content"]
}


const SocialStyle = {
    cursor: "pointer",
    color: "white",
    margin: "0 5px"
}

const imgStyle = {
    width: "100%",
    objectFit: "cover",
    height: [null, "400px", null, null, "400px",],
    transition: ".5s"
}

const TeamItem = ({ image, type, name, position, linkedin }) => {


    return <Tilt options={{ scale: 1, max: 25 }} sx={{width:[null,"100%","48%","33%","25%"]}}>
        <div sx={ItemStyle} className="blue-shadow item-style" >
            {/* <picture>
                <source srcSet={image.srcSet} srcSet={image.srcSet} sizes="90vw" media="(min-width: 300px)" />
            </picture> */}
                <img src={image.sourceUrl} sx={imgStyle} />
            <div sx={MobileContentStyle} className="mobile-content">
                <div sx={InfoStyle} className="info-style">
                    <Styled.h3 sx={NameStyle}>{name}</Styled.h3>
                    <Styled.p sx={ProffesionStyle}>{position}</Styled.p>
                    {linkedin ? <div sx={SocialStyle}>
                        <FaLinkedin onClick={() => window.open(linkedin)} />
                    </div> : null}
                </div>
            </div>
            <DesktopContent
                text={name}
                category={position}
                type={"slider"}
                social={true}
                linkedin={linkedin}
            />
        </div>
    </Tilt>
}

export default TeamItem;