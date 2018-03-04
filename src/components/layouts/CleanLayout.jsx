import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Error404 from '../views/Error404'
import LoadingScreen from '~~/components/shared/LoadingScreen'
import SignIn from '../views/SignIn'
import SignUp from '../views/SignUp'

import AppStore from '~~/stores/app'

import '../../styles/Auth.scss'

export default class AuthContainer extends Component {
	render = () => (
		<div>
      <LoadingScreen store={AppStore}/>
			<Switch>
				<Route exact path='/sign-up' component={SignUp}></Route>
				<Route exact path='/' component={SignIn}></Route>
				<Route component={Error404}></Route>
			</Switch>
		</div>
	)
}
