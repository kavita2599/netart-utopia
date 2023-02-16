import { CounterCard } from '/component/CounterCard.js'
import { CounterSection } from '/component/CounterSection.js'
import { CounterD } from '/data/index.js'
import { theme } from '../theme.js'

export default function Index() {
  const BgBlack = {
    background: `${theme.palette.primary.black}`,
  }
  const PrimaryColor = {
    color: `${theme.palette.primary.main}`,
  }
  return (
    <>
      <section id='counter' style={{ ...BgBlack }}>
        <CounterSection
          title={
            <>
              REINVENTING DIGITAL WITH{' '}
              <span style={PrimaryColor}>PASSION</span> AND{' '}
              <span style={PrimaryColor}>INNOVATION</span>
            </>
          }
          style={{ backgroundColor: '#424242' }}
        >
          {CounterD.map((x, i) => (
            <CounterCard key={'home_section' + i} {...x} />
          ))}
        </CounterSection>
      </section>
    </>
  )
}
