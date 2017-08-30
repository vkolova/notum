import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import AuthLayout from './layouts/AuthLayout'
import CleanLayout from './layouts/CleanLayout'
import MainLayout from './layouts/MainLayout'
import Logout from './views/Logout'
import Player from './Player'

import '../styles/App.scss'

export default class App extends Component {
	render() {
		return (
			<Switch>
				<Route exact path='/'
					component={
						localStorage.getItem('user.loggedIn') ? MainLayout : AuthLayout
					}></Route>
				<Route exact path='/sign-up' component={AuthLayout}></Route>
                <Route exact path='/new' component={MainLayout}></Route>
				<Route exact path='/tv' component={MainLayout}></Route>
				<Route exact path='/tv/:id' component={MainLayout}></Route>
				<Route exact path='/u/:username' component={MainLayout}></Route>
				<Route exact path='/logout' component={Logout}></Route>
				<Route exact path='/player' component={MainLayout}></Route>
                <Route exact path='/downloads' component={MainLayout}></Route>

				<Route component={CleanLayout}></Route>
			</Switch>
		)
	}
}
