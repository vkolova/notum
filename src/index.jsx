import React from 'react'
import ReactDOM from 'react-dom'
import { Redirect } from 'react-router'
import { MemoryRouter as Router } from 'react-router-dom'

import './bootstrapper'
import UserStore from './stores/user'
import App from './components/App'

import './styles/index.scss'

ReactDOM.render(
	<Router>
		<App/>
	</Router>,
	document.getElementById('root')
)


window.addEventListener('online',  () => UserStore.online = true)
window.addEventListener('offline', () => UserStore.online = false)
