import React, { Component } from 'react'
const notifier = require('node-notifier');

import '../../styles/Home.scss'

class Home extends Component {
	componentDidMount() {
		window.document.title = 'Home'
	}

	render() {
		return (
			<div className='view-wrapper'>
			</div>
		)
	}
}

export default Home
