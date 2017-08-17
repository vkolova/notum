import React, { Component } from 'react'
import screenfull from 'screenfull'

import Progress from './Progress'
import '../styles/Player.scss'

export default class Player extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playing: true,
            fullscreen: false
        }
        this.video = {
            duration: 0
        }
    }

    get muted() {
        return this.video.muted
    }

    set muted(val) {
        this.video.muted = val
    }

    get volume() {
        return this.video.volume
    }

    set volume(val) {
        this.video.volume = val
    }

    // video width
    get videoWidth() {
        return this.video.videoWidth
    }

    // video height
    get videoHeight() {
        return this.video.videoHeight
    }

    togglePlay = () => {
        if (this.video.paused) {
            this.video.play()
        } else {
            this.video.pause()
        }
    }

    // seek video by time
    seek = time => this.video.seek(time)

    // jump forward x seconds
    forward = seconds => this.video.forward(seconds)

    // jump back x seconds
    replay = seconds => this.video.replay(seconds)

    toggleFullScreen = () => {
        this.setState({...this.state, fullscreen: !this.state.fullscreen})
        screenfull.toggle(document.getElementsByClassName('player')[0])
    }

	render() {
		return (
            <div className='player'>
                <video
                    controls=''
                    autoPlay='false'
                    name='media'
                    ref={(video) => { this.video = video; }}>
                    <source
                        src='file:///D:/va-romitri.mp4'
                        type='video/webm'/>
                </video>
                <div className='pl-controls'>
                    <span id='playpause' data-state='play' onClick={this.togglePlay}>
                        <i className={`fa ${this.video.paused ? 'fa-play' : 'fa-pause'}`} aria-hidden='true'></i>
                    </span>


                    <span>{Math.floor(this.video.currentTime/60)}:{Math.floor(this.video.currentTime - Math.floor(this.video.currentTime/60)*60)}</span>

                    <Progress current={this.video.currentTime} max={this.video.duration}/>

                    <span>{Math.floor(this.video.duration/60)}:{Math.floor(this.video.duration - Math.floor(this.video.duration/60)*60)}</span>
                    <span id='volinc' data-state='volup'>+</span>
                    <span id='voldec' data-state='voldown'>-</span>
                    <span id='fs' data-state='go-fullscreen' onClick={this.toggleFullScreen}>
                        <i className={`fa fa-arrows-alt`} aria-hidden='true'></i>
                    </span>
                </div>
            </div>
		)
	}
}
