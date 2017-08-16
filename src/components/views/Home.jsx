import React, { Component } from 'react'
const notifier = require('node-notifier');

import Player from '../Player'

import '../../styles/Home.scss'

class Home extends Component {
	componentDidMount() {
		window.document.title = 'Home'
	}

	render() {
		return (
			<div className='view-wrapper'>
				<Player></Player>
			</div>
		)
	}
}

export default Home
