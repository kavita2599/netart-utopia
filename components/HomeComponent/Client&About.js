/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx, Styled, Flex } from 'theme-ui'
// import { Row, Col, Container } from 'react-bootstrap'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Particles from '../Animation/Particle'
import RevealContent from '../Animation/revealContent'

const ClientsectionStyle = {
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '#050505',
  backgroundSize: 'cover',
  padding: '100px 0',
}
const AboutsectionStyle = {
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '#000',
}

const AboutPadding = {
  p: [
    null,
    '50px',
    '350px 0 100px 0',
    '300px 0 100px 0',
    null,
    '250px 0 100px 0',
  ],
}

const ClientHeadingStyle = {
  color: '#fff',
  textTransform: 'uppercase',
  textAlign: 'center',
  width: '80%',
  m: '0 auto',
  fontSize: [null, 32, 38],
}

const AboutHeadingStyle = {
  ...ClientHeadingStyle,
  textAlign: [null, 'center', null, 'start'],
}

const leftCol = {
  display: 'flex',
  alignItems: 'center',
}

const ClientsOne = ({
  children,
  header,
  id,
  Variant,
  particle,
}) => {
  var Var = {
    Variant1: {
      div: { ...ClientsectionStyle },
      heading: { ...ClientHeadingStyle },
    },
    Variant2: {
      div: { ...AboutsectionStyle },
      heading: { ...AboutHeadingStyle },
    },
  }
  return (
    <section id={id} sx={{ ...Var[Variant].div }}>
      {particle ? <Particles /> : null}
      <Container sx={particle ? { ...AboutPadding } : null}>
        <Grid container>
          <Grid item md={6} sx={leftCol}>
            {particle ? (
              <RevealContent>
                <Styled.h2 sx={{ ...Var[Variant].heading }}>
                  {header}
                </Styled.h2>
              </RevealContent>
            ) : (
              <Styled.h2 sx={{ ...Var[Variant].heading }}>
                {header}
              </Styled.h2>
            )}
          </Grid>
          <Grid
            item
            md={6}
            sx={{ pt: [null, '20px', '0'] }}
          >
            <Grid container>{children}</Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default ClientsOne
