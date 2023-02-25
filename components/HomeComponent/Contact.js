/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui";
import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import AnimationContainer from "../Animation/AnimatedContainer"
import ContactCreativeForm from './ContactCreativeForm'


const section = {
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#000",
    padding: [null,"70px 0 0 0","85px 0 0 0","100px 0 0 0"],
}

const FormRow = {
   backgroundColor: "templateGray",
}

const ContactCol ={ 
    minHeight: "600px",
    maxHeight: "600px",
    padding: "0",
    display: "flex",
    alignItems: "center",
}

const Map = {
    border: "none",
    height: "100%",
    width: "100%",
}

const IconRow = {
    marginTop: "150px",
}

const ContactCreative = ({children})=> { 
        return(
            <section id="contact" sx={section}>
                <Container>
                   <AnimationContainer animation="fadeIn"> 
                    <Row sx={FormRow}> 
                      < Col sx={ContactCol} md={6}>
                           <ContactCreativeForm />
                      </Col>
                      <Col sx={ContactCol} md={6}>
                        <iframe sx={Map}  
                          title="map"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31328.75485884019!2d76.96349022032382!3d11.031547147508691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8591e6102768d%3A0xd889656951e16e9f!2sNETART%20%7C%20Web%20Design%20and%20Development%20%7C%20Digital%20Marketing%20Company%20in%20Coimbatore%20%7C%20SEO%20Services%20in%20Coimbatore%20%7C%20SEO%20Agency%20%7C%20Web%20Design%20and%20Development!5e0!3m2!1sen!2sin!4v1612183244831!5m2!1sen!2sin"/>
                      </Col>
                    </Row>
                   </AnimationContainer> 
                   <Row sx={IconRow}>
                     {children} 
                   </Row> 

                </Container>
            </section>
        )
    }


export default ContactCreative