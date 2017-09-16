import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Sidebar from '../Sidebar'
import Show from '../Show'
import Player from '../Player'
import Home from '../views/Home'
import Popular from '../views/Popular'
import Settings from '../views/Settings'
import Downloads from '../views/Downloads'
import UserProfile from '../views/UserProfile'
import Modal from '../shared/Modal'

import UserStore from '../../stores/user'
import ModalStore from '../../stores/modal'

import '../../styles/App.scss'

const MainLayout = props => (
	<div className='main-layout'>
		<Modal store={ModalStore}/>
		<Sidebar store={UserStore}/>
		<Switch>
			<Route exact path='/' component={Home}></Route>
			<Route exact path='/tv' component={Popular}></Route>
			<Route exact path='/new' component={Popular}></Route>
			<Route exact path='/tv/:id' component={Show}></Route>
			<Route exact path='/u/:username' component={UserProfile}></Route>
			<Route exact path='/player' component={Player}></Route>
			<Route exact path='/settings' render={() => <Settings store={UserStore}/>}></Route>
			<Route exact path='/downloads' component={Downloads}></Route>
		</Switch>
	</div>
)

export default MainLayout
