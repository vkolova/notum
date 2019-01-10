import React from 'react'
import { Route, Switch } from 'react-router-dom'

import SignIn from '../views/SignIn'
import SignUp from '../views/SignUp'

import UserStore from '../../stores/user'
import AppStore from '~~/stores/app'

import '../../styles/Auth.scss'

const AuthLayout = () => (
	<div>
		<Switch>
			<Route exact path='/' component={SignIn} store={UserStore}></Route>
			<Route exact path='/sign-up' component={SignUp}></Route>
		</Switch>
	</div>
)

export default AuthLayout
