import * as React from 'react'
import { Scene, Storyboard } from 'utopia-api'
// import { App } from '/src/app.js'
import Index from '/pages/index.js'
// import { Playground } from '/src/playground.js'

export var storyboard = (
  <Storyboard>
    <Scene
      style={{
        width: 700,
        height: 759,
        position: 'absolute',
        left: 212,
        top: 128,
      }}
      data-label='Home'
    >
      <img
        style={{
          width: 100,
          height: 100,
          contain: 'layout',
          display: 'block',
        }}
        src='/editor/icons/favicons/favicon-128.png?hash=v0.1.467'
      />
      <Index />
      <button
        style={{
          width: 145,
          height: 42,
          contain: 'layout',
        }}
      />
    </Scene>
  </Storyboard>
)
