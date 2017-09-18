import React, { Component } from 'react'

import setWindowTitle from '../shared/window-title'
import userAPI from '~~/services/user'

class Users extends Component {
	constructor(props) {
		super()
		this.state = {}
	}

	componentWillMount = async () => {
		const response = await userAPI.getUsers()
		await this.setState(response.data)
		await setWindowTitle(`Users`)
	}

	render = () => (
		<div className='view-wrapper profile-view'>
      
		</div>
	)
}

export default Users
