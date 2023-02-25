import { CounterSection } from '/component/CounterSection.js'
import { CounterCard } from '/component/CounterCard.js'
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
          CounterD={CounterD}
          title='Welcome to the netart utopia'
        >
          {CounterD.map((x, i) => (
            <CounterCard
              key={'home_section' + i}
              {...x}
              num='18'
              content='10 Years of'
            />
          ))}
        </CounterSection>
      </section>
    </>
  )
}
