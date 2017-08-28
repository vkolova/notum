import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Particles from 'particlesjs'

import user from '../../utils/user'
import particlesInit from '../shared/particlesjs-init'

export default class SignUp extends Component {
	constructor(props) {
		super()
		this.state = {
			values: {
				username: '',
				email: '',
				password: ''
			},
			error: '',
            validationError: ''
		}
	}

	componentDidMount = () => {
		window.document.title = 'Sign Up'
		Particles.init(particlesInit)
	}

	handleChange = event => {
		this.setState({
			values: {...this.state.values, [event.target.name]: event.target.value}
		})
	}

	validate = event => {
		if (event.target.name === 'password') {
			event.target.value.length < 6
    			? this.setState({ validationError: 'Password must be at least 6 characters. But virgin blood and unicorn dust are welcome, too!' })
    			: this.setState({ validationError: '' })
		} else if (event.target.name === 'email') {
			/* eslint-disable */
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)
    			? this.setState({ validationError: '' })
    			: this.setState({ validationError: 'C\'me on, babe. Enter a valid email.' })
			/* eslint-enable */
		}
	}

	handleRegister = event => {
		event.preventDefault()

        user.signUp(this.state.values)
            .then(res => {
                user.setLoggedInUser(res.data)
                window.location.href = '/'
            })
            .catch(err => this.setState({ error: err.response.data.message }))
	}

	render = () => (
		<div className='auth-page-container'>
			<form className='auth-form'>
				<input
                    type='text'
					name='username'
					placeholder='Username'
					autoComplete='off'
					value={this.state.values.username}
					onChange={this.handleChange}
					onBlur={this.validate}>
                </input>
				<input
                    type='text'
					name='email'
					placeholder='Email'
					autoComplete='off'
					value={this.state.values.email}
					onChange={this.handleChange}
					onBlur={this.validate}>
                </input>
				<input
                    type='password'
					name='password'
					placeholder='Password'
					value={this.state.values.password}
					onChange={this.handleChange}
					onBlur={this.validate}>
                </input>
				{
					this.state.error &&
                        <div className='validation-message'>
                            { this.state.error }
                        </div>
                }
                {
                    this.state.validationError &&
                        <div className='validation-message'>
                            { this.state.validationError }
                        </div>
				}
				<button
                    className={`auth-button${this.state.validationError ? ' disabled' : ''}`}
                    onClick={!this.state.validationError ? this.handleRegister : null}
                >Register</button>
			</form>

			<footer className='auth-footer'>
				<p>Already have an account? <Link to='/'>Sign In</Link> here.</p>
			</footer>
			<canvas className='particlesjs-background'></canvas>
		</div>
	)
}
