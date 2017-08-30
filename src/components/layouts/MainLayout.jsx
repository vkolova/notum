import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Sidebar from '../Sidebar'
import Show from '../Show'
import Player from '../Player'
import Multiple from '../Multiple'
import Home from '../views/Home'
import Popular from '../views/Popular'
import Downloads from '../views/Downloads'
import UserProfile from '../views/UserProfile'

import UserStore from '../../AppStore'

import '../../styles/App.scss'

const MainLayout = props => (
		<div className='main-layout'>
			<Sidebar store={UserStore}/>
			<Switch>
				<Route exact path='/' component={Home}></Route>
				<Route exact path='/tv' component={Popular}></Route>
                <Route exact path='/new' component={Multiple}></Route>
				<Route exact path='/tv/:id' component={Show}></Route>
				<Route exact path='/u/:username' component={UserProfile}></Route>
				<Route exact path='/player' component={Player}></Route>
                <Route exact path='/downloads' component={Downloads}></Route>
			</Switch>
		</div>
	)

export default MainLayout
