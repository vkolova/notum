import React from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import screenfull from 'screenfull'

import PlayerControls from './PlayerControls'

import '~~/styles/Player.scss'

let video = null

const videoState = observable({
  currentTime: 0,
  duration: 0,
  volume: 0,
  paused: false,
  fullscreen: false,
  handleTimeUpdate: () => videoState.currentTime = video.currentTime,
  handlePauseToggle: () => videoState.paused = video.paused,
  handleDurationChange: () => {
    videoState.duration = video.duration
    videoState.volume = video.volume
  },
  handleVolumeChange: e => videoState.volume = video.volume = e.target.value / 100,
  handleTimeUpdate: e => {
    e.target.value ? video.currentTime = e.target.value : null
    videoState.currentTime = video.currentTime
  },
  togglePlay: () => videoState.paused ? video.play() : video.pause(),
  toggleFullScreen: () => {
    screenfull.toggle(document.getElementsByClassName('player')[0])
    videoState.fullscreen = !videoState.fullscreen
  }
})

const Player = observer(props => (
  <div className='player'>
    <video
      autoPlay='false'
      name='media'
      onTimeUpdate={videoState.handleTimeUpdate}
      onPlay={videoState.handlePauseToggle}
      onPause={videoState.handlePauseToggle}
      onDurationChange={videoState.handleDurationChange}
      onDoubleClick={videoState.toggleFullScreen}
      ref={(v) => { video = v; }}
    >
      <source
        src='file:///D:\va-romitri.mp4'
        type='video/webm'
      />
    </video>
    <PlayerControls store={videoState}/>
  </div>
))

export default Player
