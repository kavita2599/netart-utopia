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
          {props.children}
        </Grid>
      </Grid>
    </Container>
  )
}
