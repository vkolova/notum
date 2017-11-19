import React, { Component } from 'react'
import { observer } from 'mobx-react'

import ProfileSettings from './Profile'

import setWindowTitle from '../../shared/window-title'
import gettext from '~~/utils/i18n'

import '~~/styles/Settings.scss'

@observer
export default class Settings extends Component {
	componentDidMount = () => setWindowTitle(gettext('Settings'))

	render = () => (
		<div className='view-wrapper settings-wrapper'>
			<h2>{ gettext('Settings') }</h2>
      <ProfileSettings store={this.props.store}/>

			<div className='section'>
				<span className='section-header'>
					{ gettext('App') }
					<div className='hr'/>
				</span>
				<form>
					<label>{ gettext('Downloads location') }</label>
					<input type='text' name='downlocation' defaultValue='' />
				</form>
			</div>

			<div className='hr'/>
		</div>
	)
}
