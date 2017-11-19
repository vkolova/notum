import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import Sidebar from '~~/components/shared/Sidebar'
import Player from '~~/components/shared/Player'
import Users from '~~/components/views/Admin/Users'
import Show from '../views/Show'
import Home from '../views/Home'
import Popular from '../views/Popular'
import Search from '../views/Search'
import TopRated from '../views/TopRated'
import Settings from '../views/Settings'
import Downloads from '../views/Downloads'
import UserProfile from '../views/UserProfile'
import Favorites from '../views/Favorites'
import CatchUp from '../views/CatchUp'
import Modal from '~~/components/shared/Modal'

import UserStore from '~~/stores/user'
import ModalStore from '~~/stores/modal'

import '../../styles/App.scss'

const MainLayout = props => (
	<div className='main-layout'>
		<Modal store={ModalStore}/>
		<Sidebar store={UserStore}/>
		<Switch>
			<Route exact path='/' component={Home}></Route>
			<Route exact path='/popular' component={withRouter(Popular)}></Route>
			<Route exact path='/tv/search' component={Search}></Route>
			<Route exact path='/top-rated' component={withRouter(TopRated)}></Route>
			<Route exact path='/tv/:id' component={Show}></Route>
			<Route exact path='/u/:username' component={UserProfile}></Route>
			<Route exact path='/favorites' component={Favorites}></Route>
			<Route exact path='/catch-up' component={CatchUp}></Route>
			<Route exact path='/settings' render={() => <Settings store={UserStore}/>}></Route>
			<Route exact path='/downloads' component={Downloads}></Route>

      <Route exact path='/users' component={Users}></Route>
		</Switch>
	</div>
)

export default MainLayout
