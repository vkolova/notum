import React from 'react'
import { observer } from 'mobx-react'

import '../../styles/Progress.scss'


const Progress = observer(props => (
    <div className='progress'>
        <div className='progress-bar'></div>
        <div className='progress-val-bar' style={{'width': `${props.store[props.rv]}%`}}></div>
        <div className='progress-val-pointer' style={{'left': `${props.store[props.rv]}%`}}></div>
    </div>
))

export default Progress
