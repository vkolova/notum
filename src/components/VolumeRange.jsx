import React, { Component } from 'react'
import { observer } from 'mobx-react'

import '../styles/Ranges.scss'

const VolumeRange = observer(props => (
  <div className={`slider volume-slider`}>
    <input
      type="range"
      onChange={props.onChange}
      value={`${props.store[props.rv] * 100}`}
    />
    <div
      className="slider-fill"
      style={{'width': `${props.store[props.rv] * 100}%`}}
    ></div>
  </div>
))

export default VolumeRange
