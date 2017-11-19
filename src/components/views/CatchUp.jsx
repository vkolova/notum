import React, { Component } from 'react'

import Icon from '../shared/Icon'
import setWindowTitle from '../shared/window-title'
import gettext from '~~/utils/i18n'

import Player from '../shared/Player'

import '../../styles/CatchUp.scss'

class CatchUp extends Component {
	componentDidMount = () => {
    setWindowTitle(gettext('Catch Up'))
  }

	render = () => (
		<div className='view-wrapper black-view'>
      <Player/>
		</div>
	)
}

export default CatchUp
