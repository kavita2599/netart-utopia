/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import React, { Fragment, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Cards from "../components/HomeComponent/Banner&ServicesCard";
import AnimatedHeading from "../components/Animation/AnimatedHeading";
import Slider from "../components/SwiperSlide";
import Testimonial from "../components/HomeComponent/Testimonial";
import Layout from "../components/Layout/Layout";
import TestimonialsOnePart from "../components/HomeComponent/TestimonialsOnePart";
import loadable from "@loadable/component";
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import Seo from "../components/Seo"
import ServiceBanner from "../components/HomeComponent/ServiceBanner";
import FAQ from "../components/HomeComponent/faq"
import Wrapper from "../components/Layout/Wraper";
import WorkingProcess from "../components/ServicePage/WorkingProcess";

const SeoData = {
  title: "Best Digital Branding Agency In India | Top Branding Company",
  metaDesc: "NetArt is one of the best digital branding agency in india strives to provide you the best-in-class digital products and services, with no margin of error.",
  opengraphUrl: "https://netart.io/"
}


const ServicePage = (props) => {
  const [selected, setSelected] = useState(-1)

  return (
    <Layout>
      <Seo {...SeoData} />
      {/* Hero Section  */}
      <ServiceBanner variant={'Variant1'}  {...BannerData} />
      {/* Service Section  */}
      <LazyLoadComponent>
        <section id="services" sx={{ ...sectionStyle, ...ServicesSectionStyle }}>
          <div sx={TeamOverlayStyle} />
          <Container>
            <AnimatedHeading text="Our Specialities" />
            <Row>
              {ServiceCardData.map((x, i) => (
                <Cards key={"ServicesCard" + i} {...x} Variant="Variant2" />
              ))}
            </Row>
          </Container>
        </section>
      </LazyLoadComponent>
      {/* Working Process Section  */}
      <LazyLoadComponent>
      <section id="working" sx={{...sectionStyle,paddingTop:"0"}}>
      <div sx={TeamOverlayStyle} />
        <AnimatedHeading text="Our Working Process" />
        <Flex sx={{ flexWrap: "wrap", p: "0 5%" }}>
          {workingData.map((x, index) => (
            <WorkingProcess {...x} key={"WorkingDataService" + index} />
          ))}
        </Flex>
      </section>
      </LazyLoadComponent>
      {/* Why Chose Us Section  */}
      <LazyLoadComponent>
        <ServiceBanner overlay variant={'Variant1'}  {...WhyChooseNetart} />
      </LazyLoadComponent>
      {/* testimonial section */}
      <LazyLoadComponent>
        <Testimonial>
          <Slider pagination config={testimonialconfig} name="TestimonialSlider" btn Variant="Variant1">
            {testimonials.map((x, i) => (
              <TestimonialsOnePart {...x} key={"testimonial" + i} />
            ))}
          </Slider>
        </Testimonial>
      </LazyLoadComponent>
      {/* Faq Section */}
      <LazyLoadComponent>
        <section id="faqs" sx={{ ...sectionStyle}}>
          <div sx={TeamOverlayStyle} />
          <AnimatedHeading text="FAQs Services" />
          {faqData.map((x, i) => <FAQ {...x} num={i + 1} key={"countryFaq" + i} toggle={() => { setSelected(i === selected ? -1 : i) }} open={i === selected} />)}
        </section>
      </LazyLoadComponent>
    </Layout >
  );
};

export default ServicePage;

const sectionStyle = {backgroundImage: "url(/images/bg3.jpg)", color: "white" , position: "relative", p: [null, "50px 0 65px 0", "50px 0 65px 0", "60px 0 80px 0"], }
const TeamOverlayStyle = {
  position: "absolute",
  height: "100%",
  width: "100%",
  top: 0,
  backgroundColor: "rgba(0,0,0,.8)",
  zIndex: 1
};
const workingData = [
  {
    number: "01.",
    heading: "Market Research",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    number: "02.",
    heading: "Design & Review",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    number: "03.",
    heading: "Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    number: "04.",
    heading: "Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
];
const BannerData = {
  heading: "We Create Beautiful Things That You Will Fall In Love With",
  desc: "Holisticly cultivate error-free experiences vis-a-vis maintainable experiences. Energistically implement. Dramatically create cost effective vortals for market positioning.",
  btntext: "DISCOVER THE AGENCY",
  img: "/images/service/serviceBg.png",
  link: "/",
  bgImg: "url(/images/bg1.jpg)",
};
const WhyChooseNetart = {
  bgImg: "url(/images/bg3.jpg)",
  heading2: "Why Choose NetArt",
  desc: <>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.
    <br />
    <br />
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.
    <br />
    <br />
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.
  </>,
  btntext: "GET IN TOUCH",
  img: "/images/service/serviceBg.png",
  link: "#",
};
const faqData = [
  {
    heading: "What is Maccuni ?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    heading: "What is Maccuni and what is the services we provide?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  Lorem ipsum dolor sit amet, consectetur adipiscing elit,  Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    heading: "What is Maccuni and where is the services located in all india?",
    description: <Fragment>Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, conLorem ipsum dolor sit amet,Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturamet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, con consectetur adipiscing elit, Lorem ipsum dolor sit amet, con<br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Fragment>,
  },
  {
    heading: "How much time taken by us to complete?",
    description:
      "ipsum dolor sit amet, consectetur adipiscing elit,  Lorem ipsum doloipsum dolor sit amet, consectetur adipiscing elit,  Lorem ipsum doloipsum dolor sit amet, consectetur adipiscing elit,  Lorem ipsum doloLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
const testimonialconfig = {
  speed: 500,
  slidesPerView: 1,
  autoplay: true,
  loop: true,
}
const ServicesSectionStyle = {
  position: "relative",
  overflow: "hidden",
  backgroundColor: "#111",
  backgroundImage: "url(/images/bg2.jpg)",
  backgroundSize: "cover",
};
const ServiceCardData = [
  {
    heading: "Website development",
    animation: "fadeInLeft",
    delay: 200,
    image: "/images/Icons/webdev.svg",
    List: "We create well-developed websites which are user friendly, multi-lingual and responsive. A website is important for business. It represents your brand identity. It is the first thing the user sees.",
  },
  {
    heading: "Branding",
    animation: "fadeInDown",
    delay: 400,
    image: "/images/Icons/branding.svg",
    List: "Your business identity is just one step away from becoming a brand.In order to generate the desired market objectives, we will lead you through the process of exploration, analysis and placement.",
  },
  {
    heading: "Digital Marketing",
    animation: "fadeInRight",
    delay: 600,
    image: "/images/Icons/Digital.svg",
    List: "Our strategists study your values  and then combine that insights to create outstanding custom strategies.We believe in 100% transparent and accountable behaviour with our clients, keeping our customer satisfaction is our top priority.",
  },
  {
    heading: "Graphics design",
    animation: "fadeInLeft",
    delay: 800,
    image: "/images/Icons/Graphics.svg",
    List: "A great design takes the brand identity forward. We help our clients craft the message that reflects their visual identity.",
  },
  {
    heading: "Content development",
    animation: "fadeInUp",
    delay: 1000,
    image: "/images/Icons/Content.svg",
    List: "A great content needs to convey its message easily and logically among the potential user base.Our creative writers will brainstorm the meaningful concepts to break the ice between our client and the success.",
  },
  {
    heading: "Web App development",
    animation: "fadeInRight",
    delay: 1200,
    image: "/images/Icons/webappdev.svg",
    List: "The creation of web applications empowers companies to be app-ready. With strategic planning, we ensure that the design is well suited to the needs of the user, which is the bedrock of this agency.",
  },
];
const testimonials = [
  {
    text:
      "Netart not only provided us with an excellent responsive website but also managed us to tap an unprecedented number of customers which we were missing out due to lack of any",
    name: "Chaayos Bazaar",
    profession: "",
    img: "/images/Quote/5.png",
  },
  // {
  //   text:
  //     "NetArt SEO services made our presence known on the internet which helped us tap an impressive amount of clients.",
  //   name: "Ahlawat Associates",
  //   profession: "",
  //    img:"/images/Quote/1.png",
  // },
  {
    text:
      "In this digital era, you cannot afford to be neglected, NetArt made our presence on the internet strong by its amazing SEO strategies.",
    name: "United University",
    profession: "",
    img: "/images/Quote/2.png",
  },
  {
    text:
      "Its not easy for local business to beat out the competition, But NetArt exceptional services made it possible.",
    name: "Veeyem Container services",
    profession: "",
    img: "/images/Quote/3.png",
  },
  {
    text:
      "NetArt made sure that our significance on the internet becomes so grand that we don’t miss out any clients ever.",
    name: "Parrot Crow",
    profession: "",
    img: "/images/Quote/4.png",
  },
];

