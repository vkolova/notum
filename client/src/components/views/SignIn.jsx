import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Particles from 'particlesjs'

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

	/* eslint-disable */
	handleChange = event => {
		this.setState({
			values: {...this.state.values, [event.target.name]: event.target.value}
		})
	}
	/* eslint-enable */

	handleLogin = event => {
		event.preventDefault()

		const { email, password } = this.state.values

		axios.post('https://notum-server.herokuapp.com/sign-in', {email, password})
		.then(response => {
			localStorage.setItem('token', response.data.token)
			// console.log(response)
			window.location.href = '/'
		})
		.catch(error => this.setState({ error: error.response.data.message }))

	}
	render() {
		return (
			<div className='auth-page-container'>
				<form className='auth-form'>
					<input  type='email'
							name='email'
							placeholder='Email'
							autoComplete='off'
							value={this.state.values.email}
							onChange={this.handleChange}/>
					<input  type='password'
							name='password'
							placeholder='Password'
							value={this.state.values.password}
							onChange={this.handleChange}/>
					{
						this.state.error && <div className='validation-message'>{ this.state.error }</div>
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
}
