import React, { Component } from 'react'

import Icon from '../shared/Icon'
import SearchBar from '../shared/SearchBar'
import setWindowTitle from '../shared/window-title'
import gettext from '~~/utils/i18n'

import '../../styles/Home.scss'

class Home extends Component {
	componentDidMount = () => {
    setWindowTitle(gettext('Home'))
    // var notification = new Notification('Email received', {
    //   body: 'You have a total of 3 unread emails'
    // });
    //
    // notification.onshow = function() {
    //   console.log('Notification shown');
    // };
  }

	render = () => (
		<div className='view-wrapper'>
			<SearchBar props={this.props}/>
		</div>
	)
}

export default Home
