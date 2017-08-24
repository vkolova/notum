import React, { Component } from 'react'
const notifier = require('node-notifier');

import '../../styles/Home.scss'

import WatchTimeChart from '../WatchTimeChart'

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
