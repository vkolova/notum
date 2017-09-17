import React, { Component } from 'react'
import axios from 'axios'

import Icon from '../shared/Icon'
import setWindowTitle from '../shared/window-title'

import '../../styles/Home.scss'

class Home extends Component {
	componentDidMount = () => setWindowTitle('Home')

	render = () => (
		<div className='view-wrapper'>
			<div className='search'>
				<Icon icon='search'/>
				<input type='text' placeholder='Search...'/>
			</div>
		</div>
	)
}

export default Home
