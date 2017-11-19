import { observable } from 'mobx'

const PlayerStore = observable({
  currentTime: 0,
  duration: 0,
  volume: 0,
  paused: false,
  video: null,
  fullscreen: false,
  source: `file:///D:\/va-romitri.mp4`,
  handleTimeUpdate: () => PlayerStore.currentTime = PlayerStore.video.currentTime,
  handlePauseToggle: () => PlayerStore.paused = PlayerStore.video.paused,
  handleDurationChange: () => {
    PlayerStore.duration = PlayerStore.video.duration
    PlayerStore.volume = PlayerStore.video.volume
  },
  handleVolumeChange: e => PlayerStore.volume = PlayerStore.video.volume = e.target.value / 100,
  handleTimeUpdate: e => {
    e.target.value ? PlayerStore.video.currentTime = e.target.value : null
    PlayerStore.currentTime = PlayerStore.video.currentTime
  },
  togglePlay: () => PlayerStore.paused ? PlayerStore.video.play() : PlayerStore.video.pause(),
  toggleFullScreen: () => {
    screenfull.toggle(document.getElementsByClassName('player')[0])
    PlayerStore.fullscreen = !PlayerStore.fullscreen
  }
})

export default PlayerStore
