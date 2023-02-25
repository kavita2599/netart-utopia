/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import React, { useState, useEffect } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import AnimationContainer from "../Animation/AnimatedContainer"
import Counter from "./Counter"

const AboutRHSComp=({value,duration,delay,symbol,text,animation})=>{
    return <Col md={6} sx={{textAlign:[null,"center",null,"start"],}}>
        <AnimationContainer animation={animation} delay={1000}>
            <div style={{marginBottom: "100px",m:[null,"50px 0",null,null,"10px 0"],}} >
                <Counter value={value} duration={duration} delay={delay} symbol={symbol?"+":null} text={text} />
            </div>
        </AnimationContainer>
    </Col>
}


export default AboutRHSComp

