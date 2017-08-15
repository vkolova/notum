import React from 'react'

import '../styles/Player.scss'

const Player = props => (
    <div className='player'>
        <video
            controls=''
            autoPlay='false'
            name='media'>
            <source
                src='file:///D:/Downloads/Teen.Wolf.S06E13.HDTV.x264-FLEET[eztv].mkv'
                type='video/webm'/>
        </video>
        <div className='pl-controls'>
            <span id='playpause' data-state='play'>{'|>'}</span>
            <span id='stop' data-state='stop'>!</span>
            <div className='player-progress'>
                <progress id='progress' value='0' min='0'>
                    <span id='progress-bar'></span>
                </progress>
            </div>
            <span id='volinc' data-state='volup'>+</span>
            <span id='voldec' data-state='voldown'>-</span>
            <span id='fs' data-state='go-fullscreen'>Fs</span>
        </div>
    </div>
)

export default Player
