/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import React, { Fragment } from 'react'
import { Grid, Container } from '@mui/material'
import Hero from '../components/HomeComponent/Hero'
import Cards from '../components/HomeComponent/Banner&ServicesCard'
import ClientsOne from '../components/HomeComponent/Client&About'
import AnimationContainer from '../components/Animation/AnimatedContainer'
import AnimatedHeading from '../components/Animation/AnimatedHeading'
import AboutRHSComp from '../components/HomeComponent/AboutRHSComp'
import Slider from '../components/SwiperSlide'
import ContactCard from '../components/HomeComponent/contactCard'
import TeamItem from '../components/HomeComponent/TeamItem'
import Testimonial from '../components/HomeComponent/Testimonial'
import Layout from '../components/Layout/Layout'
import TestimonialsOnePart from '../components/HomeComponent/TestimonialsOnePart'
import loadable from '@loadable/component'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import Seo from '../components/Seo'
import ContactCreative from '../components/HomeComponent/Contact'
import {
  HeroCardData,
  ServiceCardData,
  clientsData,
  AboutRHSData,
  contactCardData,
  testimonials,
} from '../data/index.js'

const SeoData = {
  title:
    'Best Digital Branding Agency In India | Top Branding Company',
  metaDesc:
    'NetArt is one of the best digital branding agency in india strives to provide you the best-in-class digital products and services, with no margin of error.',
  opengraphUrl: 'https://netart.io/',
}

const IndexPage = (props) => {
  const TeamDataList = [
    {
      linkedin:
        'https://www.linkedin.com/in/sanjay-sp-535820106/',
      name: 'Sanjay SP',
      position: 'CTO',
      image: {
        sourceUrl: '/images/Team/sanjay.png',
        srcSet:
          'https://admin.netart.io/wp-content/uploads/2021/05/sanjay-1-230x300.png 230w, https://admin.netart.io/wp-content/uploads/2021/05/sanjay-1-150x196.png 150w, https://admin.netart.io/wp-content/uploads/2021/05/sanjay-1.png 270w',
      },
    },
    {
      linkedin:
        'https://www.linkedin.com/in/akshay-j-chettupuzha-06971bb5/',
      name: 'Akshay J C',
      position: 'COO',
      image: {
        sourceUrl: '/images/Team/Akshay.png',
        srcSet:
          'https://admin.netart.io/wp-content/uploads/2021/05/Akshay-230x300.png 230w, https://admin.netart.io/wp-content/uploads/2021/05/Akshay.png 270w',
      },
    },
  ]

  const sectionStyle = {
    backgroundImage: 'url(/images/bg3.jpg)',
    color: 'white',
    position: 'relative',
    p: [
      null,
      '50px 0 65px 0',
      '50px 0 65px 0',
      '60px 0 80px 0',
    ],
  }

  const testimonialconfig = {
    speed: 500,
    slidesPerView: 1,
    autoplay: true,
    loop: true,
  }

  const ServicesSectionStyle = {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#111',
    backgroundImage: 'url(/images/bg2.jpg)',
    backgroundSize: 'cover',
  }

  const TeamSectionStyle = {
    backgroundImage: 'url(/images/bg3.jpg)',
    padding: '100px 0',
    position: 'relative',
    backgroundSize: 'cover',
  }

  const TeamOverlayStyle = {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    backgroundColor: 'rgba(0,0,0,.8)',
  }

  const client = {
    height: '100px',
    width: '85%',
    objectFit: 'scale-down',
  }

  const clientCol = {
    textAlign: ' center',
    padding: '20px 0',
    borderColor: '#efefef',
    borderLeft: 'none',
    borderTop: 'none',
    transition: '.1s',
    ':hover': {
      transform: 'scale(1.1)',
      backgroundColor: 'templatePrimary',
      zIndex: '5',
      borderRadius: '10px',
    },
  }
  const color = {
    color: 'templatePrimary',
    fontFamily: 'century gothic',
    display: 'inline-block',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontSize: [null, 32, 38],
    lineHeight: [null, '25px', null, '50px', null, '80px'],
  }

  return (
    <Layout>
      <Seo {...SeoData} />
      {/* Hero Section  */}
      <Hero
        HomeBanner
        heading1='Grow your Brand'
        heading2='with a Digital Push'
      >
        {HeroCardData.map((x, i) => (
          <Cards
            key={'HeroCards' + i}
            {...x}
            Variant='Variant1'
          />
        ))}
      </Hero>
      {/* About SEction */}
      <LazyLoadComponent>
        <ClientsOne
          Variant='Variant2'
          particle
          id='about'
          header={
            <>
              {' '}
              Reinventing Digital with
              <span sx={{ ...color, ml: '8px' }}>
                passion
              </span>{' '}
              and{' '}
              <span sx={{ ...color, mr: '8px' }}>
                innovation
              </span>
            </>
          }
        >
          {AboutRHSData.map((x, i) => (
            <AboutRHSComp {...x} key={'aboutRhsComp' + i} />
          ))}
        </ClientsOne>
      </LazyLoadComponent>
      {/* Service Section  */}
      <LazyLoadComponent>
        <section
          id='services'
          sx={{ ...sectionStyle, ...ServicesSectionStyle }}
        >
          <div sx={TeamOverlayStyle} />
          <Container>
            <AnimatedHeading text='Our Specialities' />
            <Grid container>
              {ServiceCardData.map((x, i) => (
                <Cards
                  key={'ServicesCard' + i}
                  {...x}
                  Variant='Variant2'
                />
              ))}
            </Grid>
          </Container>
        </section>
      </LazyLoadComponent>

      {/* testimonial section */}
      <LazyLoadComponent>
        <Testimonial>
          <Slider
            pagination
            config={testimonialconfig}
            name='TestimonialSlider'
            btn
            Variant='Variant1'
          >
            {testimonials.map((x, i) => (
              <TestimonialsOnePart
                {...x}
                key={'testimonial' + i}
              />
            ))}
          </Slider>
        </Testimonial>
      </LazyLoadComponent>
      {/* Teams Section  */}
      <LazyLoadComponent>
        <section id='team' sx={TeamSectionStyle}>
          <div sx={TeamOverlayStyle} />
          <Grid item md={12}>
            <Container>
              <AnimatedHeading text='Our Founders' />
            </Container>
            <div
              sx={{ padding: [null, '0 50px', null, '0'] }}
            >
              <Container>
                <AnimationContainer animation='fadeIn'>
                  <div
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-evenly',
                    }}
                  >
                    {TeamDataList.map((x, i) => (
                      <LazyLoadComponent>
                        <TeamItem
                          key={'Team-slider' + i}
                          {...x}
                        />
                      </LazyLoadComponent>
                    ))}
                  </div>
                </AnimationContainer>
              </Container>
            </div>
          </Grid>
        </section>
      </LazyLoadComponent>
      {/* CLients SEction */}
      <LazyLoadComponent>
        <ClientsOne
          Variant='Variant1'
          id='clients'
          header={
            <>
              {' '}
              <span sx={{ ...color, mr: '8px' }}>
                CLIENTS
              </span>
              <br />
              WE WORKED WITH{' '}
            </>
          }
        >
          {clientsData.map((x, i) => (
            <Col
              md={3}
              key={'clients' + i}
              sx={clientCol}
              style={{
                borderRight:
                  (i + 1) % 4 === 0 ? 'none' : '1px solid',
                borderBottom: i < 8 ? '1px solid' : 'none',
              }}
            >
              <AnimationContainer
                animation='fadeIn slower'
                delay={i * 200}
              >
                <LazyLoadImage src={x.imgurl} sx={client} />
              </AnimationContainer>
            </Col>
          ))}
        </ClientsOne>
      </LazyLoadComponent>
      {/* Contacts Section */}
      <LazyLoadComponent>
        <ContactCreative>
          {contactCardData.map((x, i) => (
            <ContactCard key={'contactCard' + i} {...x} />
          ))}
        </ContactCreative>
      </LazyLoadComponent>
    </Layout>
  )
}

export default IndexPage
