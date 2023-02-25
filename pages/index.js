/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import React, { Fragment } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Hero from "../components/HomeComponent/Hero";
import Cards from "../components/HomeComponent/Banner&ServicesCard";
import ClientsOne from "../components/HomeComponent/Client&About";
import AnimationContainer from "../components/Animation/AnimatedContainer";
import AnimatedHeading from "../components/Animation/AnimatedHeading";
import AboutRHSComp from "../components/HomeComponent/AboutRHSComp";
import Slider from "../components/SwiperSlide";
import ContactCard from "../components/HomeComponent/contactCard";
import TeamItem from "../components/HomeComponent/TeamItem";
import Testimonial from "../components/HomeComponent/Testimonial";
import Layout from "../components/Layout/Layout";
import TestimonialsOnePart from "../components/HomeComponent/TestimonialsOnePart";
import loadable from "@loadable/component";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import Seo from "../components/Seo"
const ContactCreative = loadable(() =>
  import("../components/HomeComponent/Contact")
);

const SeoData = {
  title: "Best Digital Branding Agency In India | Top Branding Company",
  metaDesc: "NetArt is one of the best digital branding agency in india strives to provide you the best-in-class digital products and services, with no margin of error.",
  opengraphUrl: "https://netart.io/"
}


const IndexPage = (props) => {

  const TeamDataList = [
    {
      "linkedin": "https://www.linkedin.com/in/sanjay-sp-535820106/",
      "name": "Sanjay SP",
      "position": "CTO",
      "image": {
        "sourceUrl": "/images/Team/sanjay.png",
        "srcSet": "https://admin.netart.io/wp-content/uploads/2021/05/sanjay-1-230x300.png 230w, https://admin.netart.io/wp-content/uploads/2021/05/sanjay-1-150x196.png 150w, https://admin.netart.io/wp-content/uploads/2021/05/sanjay-1.png 270w"
      }
    },
    {
      "linkedin": "https://www.linkedin.com/in/akshay-j-chettupuzha-06971bb5/",
      "name": "Akshay J C",
      "position": "COO",
      "image": {
        "sourceUrl": "/images/Team/Akshay.png",
        "srcSet": "https://admin.netart.io/wp-content/uploads/2021/05/Akshay-230x300.png 230w, https://admin.netart.io/wp-content/uploads/2021/05/Akshay.png 270w"
      }
    }
  ]

  return (
    <Layout>
      <Seo {...SeoData} />
      {/* Hero Section  */}
      <Hero HomeBanner heading1="Grow your Brand" heading2="with a Digital Push">
        {HeroCardData.map((x, i) => (
          <Cards key={"HeroCards" + i} {...x} Variant="Variant1" />
        ))}
      </Hero>
      {/* About SEction */}
      <LazyLoadComponent>
        <ClientsOne Variant="Variant2" particle id="about"
          header={<> Reinventing Digital with<span sx={{ ...color, ml: "8px" }}>passion</span> and <span sx={{ ...color, mr: "8px" }}>innovation</span></>}>
          {AboutRHSData.map((x, i) => (
            <AboutRHSComp {...x} key={"aboutRhsComp" + i} />
          ))}
        </ClientsOne>
      </LazyLoadComponent>
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
       {/* Teams Section  */}
      <LazyLoadComponent>
        <section id="team" sx={TeamSectionStyle}>
          <div sx={TeamOverlayStyle} />
          <Col md={12}>
            <Container>
              <AnimatedHeading text="Our Founders" />
            </Container>
            <div sx={{ padding: [null, "0 50px", null, "0"], }}>
              <Container>
                <AnimationContainer animation="fadeIn">
                  <div sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                    {TeamDataList.map((x, i) => (
                      <LazyLoadComponent>
                        <TeamItem key={"Team-slider" + i} {...x} />
                      </LazyLoadComponent>
                    ))}
                  </div>
                </AnimationContainer>
              </Container>
            </div>
          </Col>
        </section>
      </LazyLoadComponent>
      {/* CLients SEction */}
      <LazyLoadComponent>
        <ClientsOne Variant="Variant1" id="clients"
          header={<> <span sx={{ ...color, mr: "8px" }}>CLIENTS</span><br />WE WORKED WITH  </>} >
          {clientsData.map((x, i) => (
            <Col md={3} key={"clients" + i} sx={clientCol}
              style={{ borderRight: (i + 1) % 4 === 0 ? "none" : "1px solid", borderBottom: i < 8 ? "1px solid" : "none", }} >
              <AnimationContainer animation="fadeIn slower" delay={i * 200}>
                <LazyLoadImage src={x.imgurl} sx={client} />
              </AnimationContainer>
            </Col>
          ))}
        </ClientsOne>
      </LazyLoadComponent>
      {/* Contacts Section */}
      <LazyLoadComponent>
        <ContactCreative>
          {contactCardData.map((x, i) => <ContactCard key={"contactCard" + i} {...x} />)}
        </ContactCreative>
      </LazyLoadComponent>
    </Layout>
  );
};

export default IndexPage;

const sectionStyle = {backgroundImage: "url(/images/bg3.jpg)", color: "white" , position: "relative", p: [null, "50px 0 65px 0", "50px 0 65px 0", "60px 0 80px 0"], }

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

const TeamSectionStyle = {
  backgroundImage: "url(/images/bg3.jpg)",
  padding: "100px 0",
  position: "relative",
  backgroundSize: "cover",
};

const TeamOverlayStyle = {
  position: "absolute",
  height: "100%",
  width: "100%",
  top: 0,
  backgroundColor: "rgba(0,0,0,.8)",
};


const client = {
  height: "100px",
  width: "85%",
  objectFit: "scale-down"
};

const clientCol = {
  textAlign: " center",
  padding: "20px 0",
  borderColor: "#efefef",
  borderLeft: "none",
  borderTop: "none",
  transition: ".1s",
  ":hover": {
    transform: "scale(1.1)",
    backgroundColor: "templatePrimary",
    zIndex: "5",
    borderRadius: "10px",
  },
};
const color = {
  color: "templatePrimary",
  fontFamily: "century gothic",
  display: "inline-block",
  textTransform: "uppercase",
  letterSpacing: "2px",
  fontSize: [null, 32, 38],
  lineHeight: [null, "25px", null, "50px", null, "80px"],
};

const HeroCardData = [
  {
    heading: "Candour",
    image: "/images/Icons/Candour.svg",
    description:
      " We believe in transparency to our consumers and that commence from our planning to execution.",
  },
  {
    heading: "Lucid",
    image: "/images/Icons/Lucid.svg",
    description: <Fragment>We deliver products that deftly resonate inside the heart of the masses.<span sx={{ opacity: "0" }}>Some text to adjust</span></Fragment>,
  },
  {
    heading: "Dynamic",
    image: "/images/Icons/Dynamic.svg",
    description:
      "We strive to improve our strategies so they suit your needs and the modern times.",
  },
];

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

const clientsData = [
  // {
  //   imgurl: "/images/Clients/Ahlawat.png",
  //   index: "1",
  // },
  {
    imgurl: "/images/Clients/ak.png",
    index: "2",
  },
  {
    imgurl: "/images/Clients/Chaayos.png",
    index: "3",
  },
  {
    imgurl: "/images/Clients/Glastone.png",
    index: "4",
  },
  {
    imgurl: "/images/Clients/guvi-logo.png",
    index: "5",
  },
  {
    imgurl: "/images/Clients/monkey.svg",
    index: "6",
  },
  {
    imgurl: "/images/Clients/parrot.png",
    index: "7",
  },
  {
    imgurl: "/images/Clients/Sync.png",
    index: "8",
  },
  {
    imgurl: "/images/Clients/united.png",
    index: "9",
  },
  {
    imgurl: "/images/Clients/weddingvow.png",
    index: "10",
  },
  {
    imgurl: "/images/Clients/transabel.png",
    index: "11",
  },
  {
    imgurl: "/images/Clients/eventda.svg",
    index: "12",
  },
];

const AboutRHSData = [
  {
    value: 5,
    duration: 5,
    delay: 1000,
    symbol: true,
    text: "5 Years of Experience",
    animation: "fadeInLeft",
  },
  {
    value: 100,
    duration: 5,
    delay: 1000,
    symbol: true,
    text: <Fragment>Clients<br />Worked With</Fragment>,
    animation: "fadeInRight",
  },
  {
    value: 15,
    duration: 5,
    delay: 1000,
    text: <Fragment>Team<br /> Members</Fragment>,
    animation: "fadeInLeft",
  },
];

const contactCardData = [
  {
    imgurl: "/images/Icons/email.svg",
    title: " Email",
    link: "work@netart.io",
    delays: "500",
  },
  {
    imgurl: "/images/Icons/phone.svg",
    title: "Phone",
    link: "+91 97897 20718",
    delays: "1000",
  },
  {
    imgurl: "/images/Icons/address.svg",
    title: "Address",
    link: <Fragment>NetArt A.K Complex, 13/17, Tagore Rd,<br /> Ganapathy, Coimbatore, Tamil Nadu,<br />India – 641006</Fragment>,
    delays: "1500",
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


// export async function getStaticProps() {
//   const resp = await GraphqlClient.post("", { query: TeamData }, "");
//   const allLocations = resp.data.data;
//   if (!resp.data) {
//     return {
//       notFound: true,
//     };
//   }
//   return {
//     props: {
//       data: allLocations,
//     },
//   };
// }
