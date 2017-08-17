import React from 'react'

import '../styles/Progress.scss'

const Progress = props => (
    <div className='progress'>
        <div className='progress-bar'></div>
        <div className='progress-val-bar' style={{'width': `${(props.current/props.max) * 100}%`}}></div>
        <div className='progress-val-pointer' style={{'left': `${(props.current/props.max) * 100}%`}}></div>
    </div>
)

export default Progress
