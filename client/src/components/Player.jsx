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
                        src='file:///D:/Downloads/Teen.Wolf.S06E13.HDTV.x264-FLEET[eztv].mkv'
                        type='video/webm'/>
                </video>
                <div className='pl-controls'>
                    <span id='playpause' data-state='play'>
                        <i className={`fa fa-pause`} aria-hidden='true'></i>
                    </span>

                    <span id='stop' data-state='stop'>
                        <i className={`fa fa-stop`} aria-hidden='true'></i>
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
