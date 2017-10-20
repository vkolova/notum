import React, { Component } from 'react'

import setWindowTitle from '~~/components/shared/window-title'
import userAPI from '~~/services/user'

class Users extends Component {
	constructor(props) {
		super()
		this.state = {
      users: []
    }
	}

	componentWillMount = async () => {
		const response = await userAPI.getUsers()
		await this.setState({ users: response.data })
		await setWindowTitle(`Users`)
    await console.log(this.state.users)
	}

	render = () => (
		<div className='view-wrapper profile-view'>

		</div>
	)
}

export default Users
