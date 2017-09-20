import React, { Component } from 'react'
import { observer } from 'mobx-react'
import electron from 'electron'

import AppStore from '~~/stores/app'
import Icon from './Icon'

const win = electron.remote.getCurrentWindow()

import '~~/styles/AppFrame.scss'
import notumIcon from '~~/styles/images/notum-icon.png'

const AppFrame = observer(() => (
  <div className='app-frame'>
		<div>
      <span>
        <img src={ notumIcon } style={{ maxHeight: '15px', marginRight: '15px' }}/>
      </span>
			<span className='history-arrow' onClick={ () => window.history.back() }>
				<Icon icon='chevron-left'/>
			</span>
			<span className='history-arrow' onClick={ () => window.history.forward() }>
				<Icon icon='chevron-right'/>
			</span>
		</div>

		<div>{ AppStore.title }</div>

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
))

export default AppFrame
