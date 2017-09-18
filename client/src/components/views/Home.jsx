import React, { Component } from 'react'

import Icon from '../shared/Icon'
import SearchBar from '../shared/SearchBar'
import setWindowTitle from '../shared/window-title'

import '../../styles/Home.scss'

class Home extends Component {
	componentDidMount = () => setWindowTitle('Home')

	render = () => (
		<div className='view-wrapper'>
			<SearchBar props={this.props}/>
		</div>
	)
}

export default Home
