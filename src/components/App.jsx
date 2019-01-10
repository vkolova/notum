import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import AuthLayout from './layouts/AuthLayout'
import CleanLayout from './layouts/CleanLayout'
import MainLayout from './layouts/MainLayout'
import Logout from './views/Logout'
import Player from '~~/components/shared/Player'
import AppFrame from '~~/components/shared/AppFrame'

import '../styles/App.scss'

export default class App extends Component {
	render = () => (
		<div className='app'>
			<AppFrame/>
			<Switch>
				<Route exact path='/'
					component={
						localStorage.getItem('user.loggedIn') ? MainLayout : AuthLayout
					}
					/>
				<Route exact path='/sign-up' component={AuthLayout}></Route>
				<Route exact path='/popular' component={MainLayout}></Route>
				<Route exact path='/tv/search' component={MainLayout}></Route>
				<Route exact path='/top-rated' component={MainLayout}></Route>
				<Route exact path='/tv/:id' component={MainLayout}></Route>
				<Route exact path='/u/:username' component={MainLayout}></Route>
				<Route exact path='/favorites' component={MainLayout}></Route>
				<Route exact path='/logout' component={Logout}></Route>
				<Route exact path='/catch-up' component={MainLayout}></Route>
				<Route exact path='/settings' component={MainLayout}></Route>
				<Route exact path='/downloads' component={MainLayout}></Route>

                <Route exact path='/users' component={MainLayout}></Route>

				<Route component={CleanLayout}></Route>
			</Switch>
		</div>
	)
}
