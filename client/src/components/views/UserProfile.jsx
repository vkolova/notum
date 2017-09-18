import React, { Component } from 'react'
import moment from 'moment'

import setWindowTitle from '../shared/window-title'
import userAPI from '~~/services/user'
import WatchTimeChart from '../WatchTimeChart'

import '../../styles/UserProfile.scss'

class UserProfile extends Component {
	constructor(props) {
		super()
		this.state = {}
	}

	componentWillMount = async () => {
		const response = await userAPI.getUserProfilePageInfo(this.props.match.params.username)
		await this.setState(response.data)
		await setWindowTitle(`User ${this.state.username}`)
	}

	render = () => (
		<div className='view-wrapper profile-view'>
			<div className='profile-header'>
				<WatchTimeChart
					labels={['19 august','20 august','21 august','22 august','23 august']}
					data={[60,45,120,0,30,90]}
				></WatchTimeChart>
				<div className='profile-user-info'>
					<div className='profile-avatar-wrapper'>
						<img
							className='profile-avatar'
							src={this.state.avatar}
							/>
					</div>
					<h1 className='profile-user-name'>{ this.state.username }</h1>
					<span className='member-since'>Member since { this.state.joined && moment(`${this.state.joined}`).format('MMMM YYYY') }</span>
				</div>
			</div>
			<div className='profile-content'></div>
		</div>
	)
}

export default UserProfile
