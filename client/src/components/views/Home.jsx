import React, { Component } from 'react'
import axios from 'axios'

import setWindowTitle from '../shared/window-title'

import '../../styles/Home.scss'

class Home extends Component {
	componentDidMount = () => setWindowTitle('Home')

	render = () => (
		<div className='view-wrapper'>
			<h1>Hi!</h1>
		</div>
	)
}

export default Home
