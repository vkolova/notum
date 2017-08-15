import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Particles from 'particlesjs'

export default class SignUp extends Component {
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
		window.document.title = 'Sign Up'

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
			values: {...this.state.values, [event.target.name]: event.target.value}
		})
	}

	validate = event => {
		if (event.target.name === 'password') {
			event.target.value.length < 6
			? this.setState({ error: 'Password must be at least 6 characters.' })
			: this.setState({ error: '' })
		} else if (event.target.name === 'email') {
			/* eslint-disable */
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)
			? this.setState({ error: '' })
			: this.setState({ error: 'Invalid email.' })
			/* eslint-enable */
		}
	}

	handleRegister = event => {
		event.preventDefault()
		const { username, email, password } = this.state.values

		axios.post('https://notum-server.herokuapp.com/sign-up', {username, email, password})
			.then(response => console.log(response))
			.catch(error => console.log(error))

	}

	render() {
		return (
			<div className='auth-page-container'>
				<form className='auth-form'>
					<input type='text'
							name='username'
							placeholder='Username'
							autoComplete='off'
							value={this.state.values.username}
							onChange={this.handleChange}
							onBlur={this.validate}></input>
					<input type='text'
							name='email'
							placeholder='Email'
							autoComplete='off'
							value={this.state.values.email}
							onChange={this.handleChange}
							onBlur={this.validate}></input>
					<input type='password'
							name='password'
							placeholder='Password'
							value={this.state.values.password}
							onChange={this.handleChange}
							onBlur={this.validate}></input>
					{
						this.state.error && <div className='validation-message'>{ this.state.error }</div>
					}
					<button onClick={this.handleRegister}>Register</button>
				</form>

				<footer className='auth-footer'>
					<p>Already have an account? <Link to='/'>Sign In</Link> here.</p>
				</footer>
				<canvas className='particlesjs-background'></canvas>
			</div>
		)
	}
}
