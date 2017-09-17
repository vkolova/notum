import React, { Component } from 'react'
import electron from 'electron'

const win = electron.remote.getCurrentWindow()

import Icon from './Icon'

import '~~/styles/AppFrame.scss'

class AppFrame extends Component {
	constructor(props) {
		super()
		console.log(props)
	}

	render = () => (
    <div className='app-frame'>
			<div>
				<span className='history-arrow' onClick={ () => window.history.back() }>
					<Icon icon='chevron-left'/>
				</span>
				<span className='history-arrow' onClick={ () => window.history.forward() }>
					<Icon icon='chevron-right'/>
				</span>
			</div>

			<div className='frame-btns'>
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
    </div>
  )
}

export default AppFrame
