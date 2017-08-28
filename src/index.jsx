import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './bootstrapper'
import UserStore from './AppStore'
import App from './components/App'

import './styles/index.scss'

ReactDOM.render(
	<BrowserRouter>
		<App/>
	</BrowserRouter>,
	document.getElementById('root')
)

window.addEventListener('online',  () => UserStore.online = true)
window.addEventListener('offline', () => UserStore.online = false)
