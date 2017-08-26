import React, { Component } from 'react'

import '../../styles/Settings.scss'


class Settings extends Component {
	componentDidMount = () => {
		window.document.title = 'Settings'
	}

	render = () => (
		<div className='view-wrapper'>
            <h1>Hi!</h1>
		</div>
	)
}

export default Settings
