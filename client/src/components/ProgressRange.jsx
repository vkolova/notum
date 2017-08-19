import React, { Component } from 'react'
import { observer } from 'mobx-react'

import '../styles/Ranges.scss'

const ProgressRange = observer(props => (
    <div className={`slider progress-slider`}>
        <input
            type='range'
            onChange={props.onChange}
            value={`${props.store[props.rv]}`}
            min={'0'}
            max={`${props.store[props.max]}`}
        />
        <div
            className='slider-fill'
            style={{'width': `${(props.store[props.rv]/props.store[props.max]) * 100}%`}}></div>
    </div>
))

export default ProgressRange
