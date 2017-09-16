import React, { Component } from 'react'
import Icon from './Icon'

import '~~/styles/AppFrame.scss'

class AppFrame extends Component {
	render = () => (
    <div className='app-frame'>
      <span onClick={close}>
        <Icon icon='times'/>
      </span>
    </div>
  )
}

export default AppFrame
