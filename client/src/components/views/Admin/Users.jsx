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
	}

	render = () => (
		<div className='view-wrapper profile-view'>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Admin</th>
            <th>Email</th>
            <th>Joined</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.users.length > 0 &&
            this.state.users.map(u =>
              <tr key={ u.email }>
                <td>{ u.username }</td>
                <td>{ u.admin.toString() }</td>
                <td>{ u.email }</td>
                <td>{ u.joined }</td>
              </tr>
            )
          }
        </tbody>
      </table>
		</div>
	)
}

export default Users
