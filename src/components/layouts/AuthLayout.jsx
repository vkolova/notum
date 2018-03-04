import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import LoadingScreen from '~~/components/shared/LoadingScreen'
import SignIn from '../views/SignIn'
import SignUp from '../views/SignUp'

import UserStore from '../../stores/user'
import AppStore from '~~/stores/app'

import '../../styles/Auth.scss'

export default class AuthLayout extends Component {
	render = () => (
		<div>
      <LoadingScreen store={AppStore}/>
			<Switch>
				<Route exact path='/' component={SignIn} store={UserStore}></Route>
				<Route exact path='/sign-up' component={SignUp}></Route>
			</Switch>
		</div>
	)
}
