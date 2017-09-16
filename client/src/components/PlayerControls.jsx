import React, { Component } from 'react'
import { observer } from 'mobx-react'

import Icon from './shared/Icon'
import VolumeRange from './VolumeRange'
import ProgressRange from './ProgressRange'
import Time from './Time'

import '../styles/Player.scss'

const PlayerControls = observer(props => (
  <div className='pl-controls'>
    <span onClick={props.store.togglePlay}>
      <Icon icon={`${props.store.paused ? 'play' : 'pause'}`}/>
    </span>

    <Time store={props.store} rv={'currentTime'}/>
    <ProgressRange
      store={props.store}
      rv={'currentTime'}
      max={'duration'}
      onChange={props.store.handleTimeUpdate}
    />
    <Time store={props.store} rv={'duration'}/>
    <Icon
      icon={
        `${props.store.volume === 0.5
          ? 'volume-down'
          : props.store.volume > 0.5 ? 'volume-up ' : `volume-off`}`
      }
    />
    <VolumeRange
      store={props.store}
      rv={'volume'}
      onChange={props.store.handleVolumeChange}
    />
    <span onClick={props.store.toggleFullScreen}>
      <Icon icon={`${props.store.fullscreen ? 'compress' : 'expand'}`}/>
    </span>
  </div>
))

export default PlayerControls
