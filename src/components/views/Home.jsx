import React, { Component } from 'react'

import Icon from '../shared/Icon'
import setWindowTitle from '../shared/window-title'
import gettext from '~~/utils/i18n'

import AppStore from '~~/stores/app'

import '../../styles/Home.scss'

class Home extends Component {
  componentWillMount = () => AppStore.setLoading(true)

	componentDidMount = () => {
    setWindowTitle(gettext('Home'))
    AppStore.setLoading(false)
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
		</div>
	)
}

export default Home
