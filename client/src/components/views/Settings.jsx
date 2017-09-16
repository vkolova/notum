import React, { Component } from 'react'
import { observer } from 'mobx-react'

import user from '../../services/user'

import setWindowTitle from '../shared/window-title'
import '../../styles/Settings.scss'

@observer
export default class Settings extends Component {
	componentDidMount = () => setWindowTitle('Settings')

	saveProfileChanges = event => {
		event.preventDefault()

		user.updateProfile({ ...this.state })
			.then(res => {
				user.updateUserStore(res.data)
			})
			.catch(err => console.log(err))
	}

	updateField = event =>
		this.setState({
			...this.state,
			[event.target.name]: event.target.value
		})

	render = () => (
		<div className='view-wrapper settings-wrapper'>
			<h2>Settings</h2>

			<div className='section'>
				<span className='section-header'>
					Profile
					<div className='hr'/>
				</span>

				<form>
					<div className='form-row'>
						<label>Username</label>
						<input
							type='text'
							name='username'
							defaultValue={ this.props.store.username }
							disabled={ true }
						/>
					</div>

					<div className='form-row'>
						<label>Avatar URL</label>
						<input
							type='text'
							name='avatar'
							onChange={ this.updateField }
							defaultValue={ this.props.store.avatar }
						/>
					</div>

					<div className='form-row'>
						<label>Email</label>
						<input
							type='email'
							name='email'
							onChange={ this.updateField }
							defaultValue={ this.props.store.email }
						/>
					</div>
					<div className='btn-row'>
						<a className='primary-btn' onClick={ this.saveProfileChanges }>Save changes</a>
					</div>
				</form>
			</div>

			<div className='section'>
				<span className='section-header'>
					App
					<div className='hr'/>
				</span>
				<form>
					<label>Downloads location</label>
					<input type='text' name='downlocation' defaultValue='' />
				</form>
			</div>

			<div className='hr'/>
		</div>
	)
}
