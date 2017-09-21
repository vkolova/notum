import React from 'react'
import { observer } from 'mobx-react'

const Time = observer(props => (
  <span className={'player-time'}>
    <span>
      {
        Math.floor(props.store[props.rv]/60) < 10
          ? `0${Math.floor(props.store[props.rv]/60)}`
          : `${Math.floor(props.store[props.rv]/60)}`
      }
    </span>
    :
    <span>
      {
        Math.floor(props.store[props.rv] - Math.floor(props.store[props.rv]/60)*60) < 10
          ? `0${Math.floor(props.store[props.rv] - Math.floor(props.store[props.rv]/60)*60)}`
          : `${Math.floor(props.store[props.rv] - Math.floor(props.store[props.rv]/60)*60)}`
      }
    </span>
  </span>
))

export default Time
