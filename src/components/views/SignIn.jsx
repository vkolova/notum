import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Particles from 'particlesjs'

import user from '../../utils/user'

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

	componentDidMount() {
		window.document.title = 'Sign In'
		Particles.init({
			selector: '.particlesjs-background',
			color: '#ffffff',
			connectParticles: true,

			responsive: [
				{
					breakpoint: 768,
					options: {
						maxParticles: 70,
						connectParticles: true
					}
				}, {
					breakpoint: 425,
					options: {
						maxParticles: 25,
						connectParticles: true
					}
				}, {
					breakpoint: 320,
					options: {
						maxParticles: 15,
						connectParticles: true
					}
				}
			]
		})
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
            .catch(err => {
                this.setState({ error: err.response.data.message })
                }
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
                    <div className='validation-message'>{ this.state.error }</div>
				}

				<button onClick={this.handleLogin}>Sign In</button>
			</form>

			<footer className='auth-footer'>
				<p>Don't have an account yet? <Link to='/sign-up'>Sign Up</Link> here.</p>
			</footer>
			<canvas className='particlesjs-background'></canvas>
		</div>
	)
}
