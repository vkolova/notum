import React, { Component } from 'react'
import electron from 'electron'

const win = electron.remote.getCurrentWindow()

import Icon from './Icon'

import '~~/styles/AppFrame.scss'

class AppFrame extends Component {
	render = () => (
    <div className='app-frame'>
			<div
				className='frame-btn'
				onClick={ () => win.minimize() }
			>
        <Icon icon='window-minimize'/>
      </div>

			<div
				className='frame-btn'
				onClick={ () => win.isMaximized() ? win.unmaximize() : win.maximize() }
			>
        <Icon icon={ win.isMaximized() ? 'window-restore' : 'window-maximize'}/>
      </div>

      <div
				className='frame-btn'
				onClick={ () => win.close() }
			>
        <Icon icon='close'/>
      </div>
    </div>
  )
}

export default AppFrame
