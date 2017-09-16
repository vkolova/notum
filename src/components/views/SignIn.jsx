import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Particles from 'particlesjs'

import particlesInit from '../shared/particlesjs-init'
import setWindowTitle from '../shared/window-title'
import user from '../../services/user'

export default class SignIn extends Component {
	constructor(props) {
		super()
		this.state = {
			values: {
				username: '',
				email: '',
				password: ''
			},
			error: ''
		}
	}

	componentDidMount = () => {
		setWindowTitle('Sign In')
		Particles.init(particlesInit)
	}

	handleChange = event => {
		this.setState({
			values: {...this.state.values,
			[event.target.name]: event.target.value}
		})
	}

	handleLogin = event => {
		event.preventDefault()

		user.signIn(this.state.values)
			.then(res => {
				user.setLoggedInUser(res.data)
				window.location.href = '/'
			})
			.catch(err =>this.setState({ error: err.response.data.message })
			)
	}

	render = () => (
		<div className='auth-page-container'>
			<form className='auth-form'>
				<input
					type='email'
					name='email'
					placeholder='Email'
					autoComplete='off'
					value={this.state.values.email}
					onChange={this.handleChange}
				/>

				<input
					type='password'
					name='password'
					placeholder='Password'
					value={this.state.values.password}
					onChange={this.handleChange}
				/>

				{
					this.state.error &&
						<div className='validation-message'>
							{ this.state.error }
						</div>
				}
				<button className={'auth-button'} onClick={this.handleLogin}>Sign In</button>
			</form>

			<footer className='auth-footer'>
				<p>Don't have an account yet? <Link to='/sign-up'>Sign Up</Link> here.</p>
			</footer>
			<canvas className='particlesjs-background'></canvas>
		</div>
	)
}
