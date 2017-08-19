import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './bootstrapper'
import App from './components/App'

import Store from './AppStore'

import registerServiceWorker from './registerServiceWorker'
import './styles/index.scss'

ReactDOM.render(
	<BrowserRouter>
		<App/>
	</BrowserRouter>,
	document.getElementById('root')
)
// registerServiceWorker()
