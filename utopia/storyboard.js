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
        left: 694,
        top: -170,
      }}
      data-label='Home'
    >
      <Index>
        <img
          style={{
            width: 72,
            height: 72,
            contain: 'layout',
          }}
          src='/editor/icons/favicons/favicon-128.png?hash=v0.1.473'
        />
      </Index>
    </Scene>
  </Storyboard>
)
