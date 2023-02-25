/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import React, { useState,useEffect } from 'react'
import AnimationContainer from '../Animation/AnimatedContainer'
import Baffle from "baffle-react"

const PageRevealer = () => {
    const [animation, setAnimation] = useState(false)
    const [complete, setComplete] = useState(false)
    const [hide, setHide] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            if (!complete) {
                setAnimation(true)
                setComplete(true)
                setTimeout(() => {
                    document.getElementById("reveal_container").style.backgroundColor = "transparent"
                    document.getElementById("reveal_text").style.opacity = 0
                    setTimeout(() => {
                        setAnimation(false)
                        setHide(true)
                    }, 500);
                }, 500);
            }
          }, 2050);
       
    })

   
    return (
        <div id="reveal_container" style={{ display: hide?"none":"flex", ...RevealDiv }}>
            <div id="reveal_text" style={{fontSize:"40px"}}>
            <AnimationContainer animation="fadeIn" >
                    <Baffle 
                        speed={50}
                        characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*"
                        obfuscate={false}
                        update={true}
                        revealDuration={500}
                        revealDelay={1000} >NetArt</Baffle>
                </AnimationContainer>
            </div>
         
            <div sx={revealStyle} id="revealer" className={animation ? "animate-page-reveal" : ""} />
        </div>
    )
}

export default PageRevealer

const revealStyle = {
    position: "fixed",
    width: "100%",
    pointerEvents: "none",
    height: "100%",
    backgroundColor: "#00D6FF",
    transform: "translateX(100%)",
}

const RevealDiv = {
    position: "fixed",
    zIndex: "100",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    opacity: 1,
    visibility: "visible",
    overflowX: "hidden !important",
    overflowY: "hidden !important",
    fontSize: [null, "30px", null, "50px"],
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "700",
}