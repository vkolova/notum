import React from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import screenfull from 'screenfull'

import PlayerControls from './PlayerControls'
import PlayerStore from '~~/stores/player'

import '~~/styles/Player.scss'

const Player = observer(props => (
  <div className='player'>
    <video
      autoPlay='false'
      name='media'
      onTimeUpdate={PlayerStore.handleTimeUpdate}
      onPlay={PlayerStore.handlePauseToggle}
      onPause={PlayerStore.handlePauseToggle}
      onDurationChange={PlayerStore.handleDurationChange}
      onDoubleClick={PlayerStore.toggleFullScreen}
      ref={(v) => { PlayerStore.video = v; }}
    >
      <source
        src={PlayerStore.source}
        type='video/webm'
      />
    </video>
    <PlayerControls store={PlayerStore}/>
  </div>
))

export default Player
