import Typography from '@mui/material/Typography'
import { theme } from '../theme'
import { Grid, Container } from '@mui/material'

export function CounterSection(props) {
  return (
    <Container>
      <Grid
        container
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Grid item xs={12} sm={12} lg={5}>
          <Typography
            variant='h2'
            style={{ ...theme.typography.h2 }}
          >
            {props.title}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          lg={6}
          container
          justifyContent='space-between'
        >
          {props.CounterD.map((x, i) => (
            <CounterCard key={'home_section' + i} {...x} />
          ))}
        </Grid>
      </Grid>
    </Container>
  )
}

export function CounterCard(props) {
  const WhiteTxt = {
    color: `${theme.palette.primary.white}`,
  }
  return (
    <Grid item xs={5} style={{ margin: '20px 0' }}>
      <Typography
        variant='p'
        paragraph
        style={{ ...WhiteTxt, ...theme.typography.h1 }}
      >
        {props.num}{' '}
        <span
          className='counter-span'
          style={{ color: `${theme.palette.primary.main}` }}
        >
          +
        </span>
      </Typography>
      <Typography
        style={{ ...WhiteTxt, ...theme.typography.h3 }}
        variant='p'
        paragraph
      >
        {props.content}
      </Typography>
    </Grid>
  )
}
