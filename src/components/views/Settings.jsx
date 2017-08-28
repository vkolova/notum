import React, { Component } from 'react'

import setWindowTitle from '../shared/window-title'
import '../../styles/Settings.scss'


class Settings extends Component {
	componentDidMount = () => setWindowTitle('Settings')

	render = () => (
		<div className='view-wrapper'>
            <h1>Hi!</h1>
		</div>
	)
}

export default Settings
