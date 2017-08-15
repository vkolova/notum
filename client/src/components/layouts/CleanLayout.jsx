import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Error404 from '../views/Error404'
import SignIn from '../views/SignIn'
import SignUp from '../views/SignUp'

import '../../styles/Auth.scss'

export default class AuthContainer extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path='/sign-up' component={SignUp}></Route>
					<Route exact path='/' component={SignIn}></Route>
                    // <Route path='*' component={Error404}></Route>
				</Switch>
			</div>
		)
	}
}
