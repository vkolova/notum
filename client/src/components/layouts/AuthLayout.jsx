import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import SignIn from '../views/SignIn'
import SignUp from '../views/SignUp'

import '../../styles/Auth.scss'

export default class AuthLayout extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path='/' component={SignIn}></Route>
					<Route exact path='/sign-up' component={SignUp}></Route>
				</Switch>
			</div>
		)
	}
}