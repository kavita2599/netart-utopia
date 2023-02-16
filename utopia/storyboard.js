import { Scene, Storyboard } from 'utopia-api'
// import { App } from '/src/app.js'
import Index from '/pages/index.js'

export var storyboard = (
  <Storyboard>
    <Scene
      style={{
        width: 1440,
        height: 1204,
        position: 'absolute',
        left: 126,
        top: 266,
      }}
      data-label='Home'
    >
      <Index />
    </Scene>
  </Storyboard>
)
