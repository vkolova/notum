import React, { Component } from 'react'

import setWindowTitle from '~~/components/shared/window-title'
import gettext from '~~/utils/i18n'
import userAPI from '~~/services/user'

import AppStore from '~~/stores/app'

import '~~/styles/Admin.scss'

class Users extends Component {
	constructor(props) {
		super()
		this.state = {
      users: []
    }
    AppStore.setLoading(true)
	}

	componentWillMount = async () => {
		const response = await userAPI.getUsers()
		await this.setState({ users: response.data })
		await setWindowTitle(`Users`)
    await AppStore.setLoading(false)
	}

	render = () => (
		<div className='view-wrapper users-view'>
      <table>
        <thead>
          <tr>
            <th>{ gettext('Username') }</th>
            <th>{ gettext('Admin') }</th>
            <th>{ gettext('Email') }</th>
            <th>{ gettext('Joined') }</th>
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
