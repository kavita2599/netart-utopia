import Typography from '@mui/material/Typography'
import { theme } from '../theme'
import { Grid } from '@mui/material'

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
