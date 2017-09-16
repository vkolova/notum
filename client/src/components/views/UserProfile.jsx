import React, { Component } from 'react'
import moment from 'moment'

import WatchTimeChart from '../WatchTimeChart'

import '../../styles/UserProfile.scss'

class UserProfile extends Component {
	render = () => (
		<div className='view-wrapper'>
			<div className='profile-header'>
				<WatchTimeChart
					labels={['19 august','20 august','21 august','22 august','23 august']}
					data={[60,45,120,0,30,90]}
				></WatchTimeChart>
				<div className='profile-user-info'>
					<div className='profile-avatar-wrapper'>
						<img
							className='profile-avatar'
							src='https://scontent.fsof2-1.fna.fbcdn.net/v/t1.0-9/18556132_1508619549190418_7013986089638763200_n.jpg?oh=9019e06c3f53c90e22280b43b6b37f1f&oe=5A3288ED'
							/>
					</div>
					<h1 className='profile-user-name'>Veselina Kolova</h1>
					<span className='member-since'>Member since { moment('2017-08-26T18:34:44.204Z').format('MMMM YYYY') }</span>
				</div>
			</div>
			<div className='profile-content'></div>
		</div>
	)
}

export default UserProfile
