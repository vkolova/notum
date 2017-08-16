import React from 'react'

import '../styles/Progress.scss'

const Progress = props => (
    <div className='progress'>
        <div className='progress-bar'></div>
        <div className='progress-val-bar'></div>
        <div className='progress-val-pointer'></div>
    </div>
)

export default Progress
