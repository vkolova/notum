import React from 'react'
import { observer } from 'mobx-react'
import electron from 'electron'

import AppStore from '~~/stores/app'
import UserStore from '~~/stores/user'
import Icon from './Icon'
import Toolbar from './Toolbar'

const win = electron.remote.getCurrentWindow()

import '~~/styles/AppFrame.scss'
import notumIcon from '~~/styles/images/notum-icon.png'

const AppFrame = props => (
    <React.Fragment>
      <div className='app-frame'>
          <div/>
    		{/*<div>
              <span>
                <img src={ notumIcon } style={{ maxHeight: '30px', marginRight: '15px' }}/>
              </span>
    		</div>*/}

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

      {
          UserStore.loggedIn &&
            <Toolbar/>
      }
  </React.Fragment>
)

export default observer(AppFrame)
