/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import React, { Fragment } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Layout from "../components/Layout/Layout";
import ContactCard from "../components/HomeComponent/contactCard";
import loadable from "@loadable/component";
import Seo from "../components/Seo"

const ContactCreative = loadable(() =>
  import("../components/HomeComponent/Contact")
);


const contactCardData = [
  {
    imgurl:
      "https://abstract-r3tr0.vercel.app/static/7367adf6c5ac8609b6788aba16783d08/46604/email2.png",
    title: " Email",
    link: "work@netart.io",
    delays: "500",
  },
  {
    imgurl:
      "https://abstract-r3tr0.vercel.app/static/dd8c3b978734a88dea4f7f8659f39eb2/26bd1/phone.png",
    title: "Phone",
    link: "7275219576",
    delays: "1000",
  },
  {
    imgurl:
      "https://abstract-r3tr0.vercel.app/static/d000e241bf9adca38ff6552446240db0/46604/map.png",
    title: "Address",
    link: "NetArt A.K Complex, 13/17, Tagore Rd, Ganapathy,Coimbatore, Tamil Nadu,India – 641006",
    delays: "1500",
  },
];

const SeoData = {
  title: "Contact - Best Digital Branding Agency In India",
  metaDesc: "NetArt is one of the best digital branding agency in india strives to provide you the best-in-class digital products and services, with no margin of error.",
  opengraphUrl: "https://netart.io/contact"
}

const Contact = () => {

  return (
    <Layout>
      <Seo {...SeoData} />
      <ContactCreative>
        {contactCardData.map((x, i) => (
          <ContactCard key={"contactCard" + i} {...x} />
        ))}
      </ContactCreative>

    </Layout>
  )
}

export default Contact